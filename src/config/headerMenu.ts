import type { NavbarItem } from '@docusaurus/theme-common';

export const headerMenu: NavbarItem[] = [
    // Example navbar items:
    {
        type: 'docSidebar',
        sidebarId: 'learnSidebar',
        docsPluginId: 'docs',
        position: 'left',
        label: 'Learn',
    },
    {
        type: 'docSidebar',
        sidebarId: 'developersSidebar',
        docsPluginId: 'docs',
        position: 'left',
        label: 'Developers',
    },
    {
        type: 'docSidebar',
        sidebarId: 'referenceSidebar',
        docsPluginId: 'docs',
        position: 'left',
        label: 'Reference',
    }
];

