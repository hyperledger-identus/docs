import React, { type ReactNode } from 'react';
import { HtmlClassNameProvider } from '@docusaurus/theme-common';
import { DocProvider } from '@docusaurus/plugin-content-docs/client';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ApiItem from '@theme/ApiItem';

// Using any for Props to avoid circular dependency with @theme/DocItem
type Props = {
  content: any;
};

export default function DocItem(props: Props): ReactNode {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;

  // Check if this is an API doc that should only be rendered on client side
  // matches outputDir: 'documentation/reference/Cloud Agent API'
  const source = props.content.metadata.source || '';
  const isApiDoc = source.includes('documentation/reference/Cloud Agent API');

  if (isApiDoc) {
    return (
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <ApiItem {...props} />}
      </BrowserOnly>
    );
  }

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
            <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
