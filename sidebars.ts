import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { discoverSidebar } from './src/utils/discovery';

const sidebars: SidebarsConfig = {
  learnSidebar: discoverSidebar('learn'),
  developersSidebar: discoverSidebar('develop'),
  referenceSidebar: discoverSidebar('reference'),
};

export default sidebars;
