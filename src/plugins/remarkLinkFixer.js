const { visit } = require('unist-util-visit');

/**
 * @typedef {'exact' | 'prefix' | 'regex'} RuleType
 *
 * @typedef {Object} ExactRule
 * @property {'exact'} type
 * @property {string} from
 * @property {string} to
 *
 * @typedef {Object} PrefixRule
 * @property {'prefix'} type
 * @property {string} from
 * @property {string} to
 *
 * @typedef {Object} RegexRule
 * @property {'regex'} type
 * @property {string} from
 * @property {string} to
 * @property {string} [flags]
 *
 * @typedef {ExactRule | PrefixRule | RegexRule} LinkRule
 *
 * @typedef {Object} RemarkLinkFixerOptions
 * @property {LinkRule[]} [rules]
 * @property {boolean} [debug]
 */

/**
 * Remark plugin that rewrites markdown links based on configurable rules.
 *
 * Supports:
 * - exact match rules
 * - prefix rules (preserve the rest of the URL)
 * - regex rules (via String.replace)
 *
 * @param {RemarkLinkFixerOptions} options
 * @returns {import('unified').Transformer}
 */
function remarkLinkFixer(options = {}) {
  const { rules = [], debug = false } = options;

  /** @type {(ExactRule | PrefixRule | (RegexRule & { pattern: RegExp }))[]} */
  const compiledRules = rules.map(rule => {
    if (rule.type === 'regex') {
      return {
        ...rule,
        pattern: new RegExp(rule.from, rule.flags || ''),
      };
    }
    return rule;
  });

  return (tree, file) => {
    // Docusaurus populates vfile.path; history[0] is original path if present
    const filePath =
      (file && Array.isArray(file.history) && file.history[0]) ||
      file.path ||
      undefined;

    const applyRules = (url) => {
      let result = url;

      for (const rule of compiledRules) {
        if (!result) break;

        if (rule.type === 'exact') {
          if (result === rule.from) {
            result = rule.to;
          }
        } else if (rule.type === 'prefix') {
          if (result.startsWith(rule.from)) {
            const rest = result.slice(rule.from.length);
            if (rest && rule.to.endsWith('/') && rest.startsWith('/')) {
              result = rule.to + rest.slice(1);
            } else {
              result = rule.to + rest;
            }
          }
        } else if (rule.type === 'regex') {
          result = result.replace(rule.pattern, rule.to);
        }
      }

      if (debug && result !== url) {
        // eslint-disable-next-line no-console
        console.log(
          `[remark-link-fixer] ${filePath ?? '<unknown file>'}: ${url} -> ${result}`,
        );
      }

      return result;
    };

    visit(tree, ['link', 'definition'], (node) => {
      if (!node.url || typeof node.url !== 'string') {
        return;
      }

      const next = applyRules(node.url);
      if (next && next !== node.url) {
        node.url = next;
      }
    });
  };
}

module.exports = remarkLinkFixer;


