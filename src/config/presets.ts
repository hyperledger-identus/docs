import type { PresetConfig } from '@docusaurus/types';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import remarkLinkFixer from '../plugins/remarkLinkFixer';
import { CloudAgentPath, LocalDocs, RootPath, SDKPath } from './constants';


export const presets: PresetConfig[] = [
  [
    './src/config/multiDocPreset.ts',
    {
      theme: {
        customCss: require.resolve('../css/custom.css'),
      },
      docs: [
        {
          id: 'docs',
          sidebarPath: require.resolve('../../sidebars.ts'),
          path: './',
          routeBasePath: '/',
          include: [
            //Load all cloud agent doc directories
            CloudAgentPath('**/*.md'),
            CloudAgentPath('**/*.mdx'),
            //Load all the SDK directories
            SDKPath('**/*.md'),
            SDKPath('**/*.mdx'),
            //Load all the local doc directories
            LocalDocs('**/*.md'),
            LocalDocs('**/*.mdx'),
            //Load the root files
            RootPath('CONTRIBUTING.md'),
            RootPath('SECURITY.md'),
          ],
          /**
           * TODO: REMOVE THIS AFTER MIGRATION TO NEW DOCS
           * 
           * Each Repository will distribute the documentation in the same way we are implementing now.
           * docs/learning
           * docs/develop
           * docs/reference
           * 
           * Each folder can have a sidebar.ts to define the sidebar items, but its not required.
           * One sidebar will be automatically generated from the content of the folder and the order of the documents 
           * can be set using mdx comments 
           */
          remarkPlugins: [
            [
              remarkLinkFixer,
              {
                rules: [
                  {
                    type: 'prefix',
                    from: '/home/concepts/glossary',
                    to: '/documentation/learn/glossary',
                  },
                  {
                    type: 'prefix',
                    from: '/home/quick-start',
                    to: '/documentation/develop/quick-start',
                  },
                  {
                    type: 'prefix',
                    from: '/home/identus/cloud-agent/overview',
                    to: '/documentation/learn/advanced-explainers/cloud-agent',
                  },
                  {
                    type: 'prefix',
                    from: '/home/identus/cloud-agent/environment-variables',
                    to: './cloud-agent/environment-variables',
                  },
                  {
                    type: 'prefix',
                    from: '/home/identus/cloud-agent/building-blocks',
                    to: './cloud-agent/building-blocks',
                  },
                  {
                    type: 'prefix',
                    from: '/home/identus/mediator',
                    to: '/documentation/learn/advanced-explainers/mediator',
                  },
                  {
                    type: 'prefix',
                    from: '/tutorials/',
                    to: '/cloud-agent/docs/docusaurus/',
                  },
                  {
                    type: 'prefix',
                    from: '/docs/agent-api',
                    to: '/documentation/reference/Cloud Agent API/identus-cloud-agent-api-reference',
                  },
                  {
                    type: 'prefix',
                    from: '/agent-api',
                    to: '/documentation/reference/Cloud Agent API/identus-cloud-agent-api-reference',
                  },
                  {
                    type: 'prefix',
                    from: './concepts/glossary',
                    to: './glossary',
                  },
                  {
                    type: 'regex',
                    from: '\\.info\\.mdx(?=$|#)',
                    to: '',
                  },
                  {
                    type: 'prefix',
                    from: '../../cloud-agent/docs/docusaurus/',
                    to: './quick-start.md',
                  }
                ],
              },
            ],
          ],
        },
        {
          id: 'api', // plugin id
          docsPluginId: 'docs', // integrate into our docs plugin
          config: {
            cloudAgent: {
              label: 'Cloud Agent API',
              specPath:
                'cloud-agent/cloud-agent/service/api/http/cloud-agent-openapi-spec.yaml',
              outputDir: 'documentation/reference/Cloud Agent API',
              sidebarOptions: {
                groupPathsBy: 'tag',
              },
            } satisfies OpenApiPlugin.Options,
          },
        },
      ],
    },
  ],
];

