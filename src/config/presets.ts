import type { PresetConfig } from '@docusaurus/types';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

export const presets: PresetConfig[] = [
    [
        './config/multiDocPreset.ts',
        {
            theme: {
                customCss: require.resolve('../src/css/custom.css'),
            },
            docs: [
                {
                    id: 'docs',
                    sidebarPath: require.resolve('../sidebars.ts'),
                    path: './',
                    routeBasePath: '/',
                    docItemComponent: '@theme/ApiItem',
                    include: [
                        'cloud-agent/docs/docusaurus/**/*.md',
                        'documentation/**/*.md',
                        'documentation/**/*.mdx',
                        'sdk-ts/docs/**/*.md'
                    ],
                },
                {
                    id: "api", // plugin id
                    docsPluginId: "docs", // integrate into our docs plugin
                    config: {
                        cloudAgent: {
                            label: 'Cloud Agent API',
                            specPath: 'cloud-agent/cloud-agent/service/api/http/cloud-agent-openapi-spec.yaml',
                            outputDir: "documentation/reference/Cloud Agent API",
                            sidebarOptions: {
                                groupPathsBy: "tag",
                            },
                        } satisfies OpenApiPlugin.Options,
                    }
                }
            ]
        }
    ]
]