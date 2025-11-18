import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/features';

import Blob from '../components/blob';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hyperledger Identus - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Blob />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
