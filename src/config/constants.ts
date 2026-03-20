export const cloudAgentDocsPath = 'cloud-agent/docs/docusaurus';
export const sdkDocsPath = 'sdk-ts/docs';
export const localDocsPath = 'documentation';

export type SDKPath<T extends string = string> = `${typeof sdkDocsPath}/${T}`
export const SDKPath = <T extends string>(name: T): SDKPath<T> => `${sdkDocsPath}/${name}`;
export type CloudAgentPath<T extends string = string> = `${typeof cloudAgentDocsPath}/${T}`
export const CloudAgentPath = <T extends string>(name: T): CloudAgentPath<T> => `${cloudAgentDocsPath}/${name}`;
export type LocalDocs<T extends string = string> = `${typeof localDocsPath}/${T}`
export const LocalDocs = <T extends string>(name: T): LocalDocs<T> => `${localDocsPath}/${name}`;

export const projectsDocsPaths = [localDocsPath, sdkDocsPath, cloudAgentDocsPath];
