import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


import { headerMenu } from './src/config/headerMenu';
import { presets } from './src/config/presets';

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

            const content = params.fileContent;

            // 1. Check for custom overrides embedded via HTML comments from TypeDoc
            const customTitleMatch = content.match(/<!--\s*title:\s*(.+?)\s*-->/i);
            const customSidebarLabelMatch = content.match(/<!--\s*sidebar_label:\s*(.+?)\s*-->/i);
            const customSidebarPositionMatch = content.match(/<!--\s*sidebar_position:\s*(\d+(\.\d+)?)\s*-->/i);
            
            let title = customTitleMatch?.[1]?.trim();

            if (customSidebarLabelMatch?.[1]) {
                result.frontMatter.sidebar_label = customSidebarLabelMatch[1].trim();
            }
            if (customSidebarPositionMatch?.[1]) {
                result.frontMatter.sidebar_position = parseFloat(customSidebarPositionMatch[1].trim());
            }

            // 2. Try first H1 heading for the page title fallback
            if (!title) {
                const h1Match = content.match(/^#\s+(.+)$/m);
                title = h1Match?.[1]?.trim();
                
                if (title) {
                    // Strip out TypeDoc reflection prefixes
                    title = title.replace(/^(?:Class|Interface|Type\s+alias|Variable|Function|Namespace|Enum|Enumeration):\s+/i, '');
                }
                
                // Auto-capitalize if it's a simple, unformatted fallback
                if (title && /^[a-z]+$/.test(title)) {
                    title = title.charAt(0).toUpperCase() + title.slice(1);
                }
            }

            // 2. For root README, fall back to package.json description
            if (!title && params.filePath.endsWith('sdk/README.md')) {
                try {
                    const fs = await import('node:fs');
                    const pkg = JSON.parse(fs.readFileSync('sdk-ts/package.json', 'utf8'));
                    title = pkg.description;
                } catch { /* ignore */ }
            }

            // 3. Bold project header (e.g. **@scope/pkg v1.0.0**)
            if (!title) {
                const boldMatch = content.match(/^\*\*(.+?)\*\*$/m);
                title = boldMatch?.[1]?.trim();
            }

            if (title) {
                // Strip all backslash escapes typedoc proactively adds (e.g. \<T\> → <T>, \_ → _)
                title = title.replace(/\\([^a-zA-Z0-9])/g, '$1');
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

