/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  tutorialsSidebar: [
    "README",
    "adr",
    "template",
    {
      type: 'category',
      label: 'Decisions',
      link: {
        type: 'generated-index',
        title: 'Decisions',
        description: 'Decisions description'
      },
      items: [
        'decisions/Error-handling-report-problem-agent',
        'decisions/apollo-as-centralised-and-secure-cryptography-management-module',
        'decisions/data-isolation-for-multitenancy',
        'decisions/did-linked-resources',
        'decisions/handle-errors-in-bg-jobs-by-storing-on-state-records-and-sending-via-webhooks',
        'decisions/hierarchical-deterministic-key-generation-algorithm',
        'decisions/mediator-message-storage',
        'decisions/message-routing-for-multi-tenant',
        'decisions/performance-framework-for-atala-prism',
        'decisions/quill-library-for-sql-statement-generation',
        'decisions/revocation-status-list-expansion-strategy',
        'decisions/store-private-keys-of-issuers-inside-prism-agent',
        'decisions/use-did-urls-to-reference-resources',
        'decisions/use-flyway-to-manage-migrations-for-application-services',
        'decisions/use-jwt-claims-for-agent-admin-auth',
        'decisions/use-keycloak-and-jwt-tokens-for-authentication-and-authorisation-to-facilitate-multitenancy-in-cloud-agent',
        'decisions/use-keycloak-authorisation-service-for-managing-wallet-permissions',
        'decisions/use-markdown-architectural-decision-records',
        'decisions/use-scala3-instead-of-scala2-to-write-applications',
        'decisions/use-zio-as-a-functional-effect-system-within-applications-to-manage-conccurency',
        'decisions/use-zio-failures-and-defects-effectively',
        'decisions/using-tapir-library-as-a-dsl-for-openapi-specification',
      ]
    },
  ]
};

module.exports = sidebars;
