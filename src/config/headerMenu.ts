import type { NavbarItem } from '@docusaurus/theme-common';

export const headerMenu: NavbarItem[] = [
    // Example navbar items:
    {
        to: '/documentation/learn/',
        position: 'left',
        activeBaseRegex: `/documentation/learn/`,
        label: 'Learn',
    },
    {
        to: '/category/cloud-agent',
        position: 'left',
        activeBaseRegex: `/category/(cloud-agent|sdk-ts)/`,
        label: 'Developers',
    },
    {
        to: '/documentation/reference/',
        position: 'left',
        activeBaseRegex: `/documentation/reference/`,
        label: 'Reference',
    },
    // {
    //     to: '/tutorials/',
    //     label: 'Tutorials',
    //     position: 'left',
    //     activeBaseRegex: `/tutorials/`
    // },
    // {
    //     to: '/adrs/',
    //     label: 'ADRs',
    //     position: 'left',
    //     activeBaseRegex: `/adrs/`
    // },
    // {
    //     to: '/agent-api/',
    //     label: 'Agent API',
    //     activeBaseRegex: `/agent-api/`
    // },
    // {
    //     type: 'dropdown',
    //     label: 'SDKs',
    //     position: 'left',
    //     items: [
    //         {
    //             label: 'SDK Swift',
    //             href: 'https://hyperledger-identus.github.io/sdk-swift/documentation/edgeagentsdk/',
    //         },
    //         {
    //             to: '/sdk-ts/sdk',
    //             label: 'SDK Typescript',
    //             activeBaseRegex: `/sdk-ts/sdk`
    //         },
    //         {
    //             label: 'SDK Kotlin Multiplatform',
    //             href: 'https://hyperledger-identus.github.io/sdk-kmp/',
    //         },
    //     ],
    // },
    // {
    //     label: 'PRISM DID Spec',
    //     href: 'https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md',
    // },
];

