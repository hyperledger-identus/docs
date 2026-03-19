import fs from 'node:fs';
import path from 'node:path';
import type { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
import { cloudAgentDocsPath } from '../config/constants';

function formatLabel(name: string): string {
    if (/^[a-z-]+$/.test(name)) {
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    return name;
}

function getTitleFromMd(filePath: string, fallback: string): string {
    if (!fs.existsSync(filePath)) return fallback;
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(/^#\s+(.*)$/m);
        return match && match[1] ? match[1].trim() : fallback;
    } catch {
        return fallback;
    }
}

export function mapStrings(item: SidebarItemConfig) {
    return typeof item === 'string' ? `${cloudAgentDocsPath}/${item}` : item;
}

export function mapCategories(item: SidebarItemConfig) {
    if (typeof item !== 'string' && item.type === 'category') {
        return {
            ...item,
            items: Array.isArray(item.items) ? item.items.map((item) => `${cloudAgentDocsPath}/${item}`) : []
        }
    }
    return item;
}


export function getSidebarItemsForDir(dirPath: string): SidebarItemConfig[] {
    if (!fs.existsSync(dirPath)) return [];

    return fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(dirent => !dirent.name.startsWith('.'))
        .map(dirent => {
            if (dirent.isDirectory()) {
                const childPath = `${dirPath}/${dirent.name}`;
                const hasReadme = fs.existsSync(`${childPath}/README.md`);
                const hasIndex = fs.existsSync(`${childPath}/index.md`);
                const isDirIndex = hasIndex || hasReadme;
                const indexName = hasIndex ? 'index' : 'README';
                const indexPath = `${childPath}/${indexName}.md`;
                const childItems = getSidebarItemsForDir(childPath);

                const cleanChildItems = childItems.filter(item => !(typeof item === 'object' && item !== null && 'type' in item && item.type === 'doc' && 'id' in item && item.id === `${childPath}/${indexName}`));

                const baseLabel = formatLabel(dirent.name);
                const label = isDirIndex ? getTitleFromMd(indexPath, baseLabel) : baseLabel;

                // If the directory only has an index/README file (no other files or folders),
                // just return the doc item to avoid empty categories
                if (isDirIndex && cleanChildItems.length === 0) {
                    return {
                        type: 'doc',
                        id: `${childPath}/${indexName}`,
                        label: label
                    } as SidebarItemConfig;
                }

                // Skip directories with no content at all (no index, no children)
                if (!isDirIndex && cleanChildItems.length === 0) {
                    return null;
                }

                return {
                    type: 'category',
                    label: label,
                    link: isDirIndex ? {
                        type: 'doc',
                        id: `${childPath}/${indexName}`
                    } : undefined,
                    items: cleanChildItems
                } as SidebarItemConfig;
            } else if (dirent.name.endsWith('.md')) {
                const isReadmeOrIndex = dirent.name === 'README.md' || dirent.name === 'index.md';
                const baseName = dirent.name.replace(/\.md$/, '');
                const mdPath = `${dirPath}/${dirent.name}`;

                const fallback = isReadmeOrIndex ? formatLabel(path.basename(dirPath)) : formatLabel(baseName);

                return {
                    type: 'doc',
                    id: `${dirPath}/${baseName}`,
                    label: getTitleFromMd(mdPath, fallback)
                } as SidebarItemConfig;
            }
            return null;
        })
        .filter((item): item is SidebarItemConfig => item !== null);
}

/**
 * This function builds a sidebar from a typedoc documentation exported markdown documents
 */
export function buildTypeDocCategorySidebar(pathStr: string, label: string): SidebarItemConfig[] {
    const dirMap: Record<string, string> = {
        'Classes': 'classes',
        'Enumerations': 'enumerations',
        'Functions': 'functions',
        'Interfaces': 'interfaces',
        'Namespaces': 'namespaces',
        'Type Aliases': 'type-aliases',
        'Variables': 'variables',
    };
    const items = Object.entries(dirMap)
        .filter(([, dir]) => fs.existsSync(`${pathStr}/${dir}`))
        .map(([element, dir]) => {
            return {
                type: 'category',
                label: element,
                link: {
                    type: 'generated-index',
                    title: element,
                    description: element
                },
                items: getSidebarItemsForDir(`${pathStr}/${dir}`)
            } as SidebarItemConfig;
        })
        .filter((item) => {
            const cat = item as { items?: unknown[] };
            return Array.isArray(cat.items) && cat.items.length > 0;
        });

    return [
        {
            type: 'category',
            label,
            link: {
                type: 'doc',
                id: pathStr + '/README',

            },
            items
        }
    ]
}