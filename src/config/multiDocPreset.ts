import { PluginOptions } from "@docusaurus/types";
import type { Options as ThemeOptions } from '@docusaurus/theme-classic';

type Opts = {
    docs: PluginOptions[],
    theme?: ThemeOptions
}

const CONTENT_DOCS_PLUGIN = '@docusaurus/plugin-content-docs';
const CONTENT_OPENAPI_PLUGIN = 'docusaurus-plugin-openapi-docs';


export default function preset(context, opts: Opts) {
    const { docs } = opts;
    return  {
        themes: [
            ['@docusaurus/theme-classic', opts.theme],
            '@docusaurus/theme-mermaid',
            'docusaurus-theme-openapi-docs',
        ],
        plugins: [
            [
                '@docusaurus/plugin-svgr',
                {
                  svgrConfig: {},
                },
              ],
            '@docusaurus/plugin-content-pages',
            ...docs.map(contentConfig => ['docsPluginId' in contentConfig ? CONTENT_OPENAPI_PLUGIN : CONTENT_DOCS_PLUGIN, contentConfig]),
        ],
    };
}