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
    onBrokenAnchors:'ignore',
    favicon: 'img/favicon.ico',
    organizationName: 'hyperledger-identus',
    projectName: 'docs',
    markdown: {
        mermaid: true,
        hooks:  {
            onBrokenMarkdownLinks:'warn'
        }
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets,
    plugins: [
        require.resolve('docusaurus-lunr-search')
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

