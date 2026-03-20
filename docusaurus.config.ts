import fs from 'node:fs';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


import { headerMenu } from './src/config/headerMenu';
import { presets } from './src/config/presets';
import { extractMarkdownTitleInfo } from './src/utils/index';
const config: Config = {
    title: 'Hyperledger Identus',
    tagline: 'Hyperledger Identus Docs',
    url: 'https://hyperledger-identus.github.io/',
    baseUrl: '/docs/',
    onBrokenLinks: 'throw',
    onBrokenAnchors: 'ignore',
    favicon: 'img/favicon.ico',
    organizationName: 'hyperledger-identus',
    projectName: 'docs',
    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: 'warn'
        },
        async parseFrontMatter(params) {
            const result = await params.defaultParseFrontMatter(params);

            // Only process typedoc-generated files that lack an explicit title
            if (result.frontMatter.title || !params.filePath.includes('sdk-ts/docs/sdk/')) {
                return result;
            }

            const { extractMarkdownTitleInfo } = await import('./src/utils/index.js');
            const info = extractMarkdownTitleInfo(params.fileContent);

            let title = info.title;

            if (info.sidebar_label) {
                result.frontMatter.sidebar_label = info.sidebar_label;
            }
            if (info.sidebar_position !== undefined) {
                result.frontMatter.sidebar_position = info.sidebar_position;
            }

            // 2. For root README, fall back to package.json description
            if (!title && params.filePath.endsWith('sdk/README.md')) {
                try {
                    const pkg = JSON.parse(fs.readFileSync('sdk-ts/package.json', 'utf8'));
                    title = pkg.description;
                } catch { /* ignore */ }
            }

            // 3. Bold project header (e.g. **@scope/pkg v1.0.0**)
            if (!title) {
                const boldMatch = params.fileContent.match(/^\*\*(.+?)\*\*$/m);
                title = boldMatch?.[1]?.trim();
                if (title) {
                    // Strip all backslash escapes typedoc proactively adds for the bold header fallback
                    // (since extractMarkdownTitleInfo already handles it for standard headings)
                    title = title.replace(/\\([^a-zA-Z0-9])/g, '$1');
                }
            }

            if (title) {
                result.frontMatter.title = title;
            }

            return result;
        },
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets,
    plugins: [
        require.resolve('docusaurus-lunr-search'),
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-BLNS09BXBY',
                anonymizeIP: true,
            },
        ],
    ],
    themeConfig: {
        navbar: {
            logo: {
                alt: 'Identus logo',
                src: 'img/identus-navbar-light.png',
                srcDark: "img/identus-navbar-light.png",
            },
            items: headerMenu,
        },
        footer: {
            copyright: `Hyperledger Identus CC BY 4.0`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

};

export default config;

