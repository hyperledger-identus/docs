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

export function extractMarkdownTitleInfo(content: string): { title?: string, sidebar_label?: string, sidebar_position?: number } {
    const customTitleMatch = content.match(/<!--\s*title:\s*(.+?)\s*-->/i);
    const customSidebarLabelMatch = content.match(/<!--\s*sidebar_label:\s*(.+?)\s*-->/i);
    const customSidebarPositionMatch = content.match(/<!--\s*sidebar_position:\s*(\d+(\.\d+)?)\s*-->/i);
    
    let title = customTitleMatch?.[1]?.trim();

    if (!title) {
        const h1Match = content.match(/^#\s+(.*)$/m);
        if (h1Match && h1Match[1]) {
            title = h1Match[1].trim();
        }
    }
    
    if (title) {
        title = title.replace(/^(?:Class|Interface|Type\s+alias|Variable|Function|Namespace|Enum|Enumeration):\s+/i, '');
        title = title.replace(/\\([^a-zA-Z0-9])/g, '$1');
        if (/^[a-z]+$/.test(title)) {
            title = title.charAt(0).toUpperCase() + title.slice(1);
        }
    }

    return {
        title,
        sidebar_label: customSidebarLabelMatch?.[1]?.trim(),
        sidebar_position: customSidebarPositionMatch?.[1] ? parseFloat(customSidebarPositionMatch[1].trim()) : undefined
    };
}

function getTitleFromMd(filePath: string, fallback: string): string {
    if (!fs.existsSync(filePath)) return fallback;
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const info = extractMarkdownTitleInfo(content);
        if (info.sidebar_label) return info.sidebar_label;
        if (info.title) return info.title;
        
        return fallback;
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

    const dirents = fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(dirent => !dirent.name.startsWith('.'));
    dirents.sort((a, b) => a.name.localeCompare(b.name));

    return dirents.map(dirent => {
            if (dirent.isDirectory()) {
                const childPath = `${dirPath}/${dirent.name}`;
                const hasReadme = fs.existsSync(`${childPath}/README.md`) || fs.existsSync(`${childPath}/README.mdx`);
                const hasIndex = fs.existsSync(`${childPath}/index.md`) || fs.existsSync(`${childPath}/index.mdx`);
                const isDirIndex = hasIndex || hasReadme;
                const indexName = hasIndex ? 'index' : 'README';
                const indexPath = `${childPath}/${indexName}.md`;
                const indexPathMdx = `${childPath}/${indexName}.mdx`;
                const childItems = getSidebarItemsForDir(childPath);

                const categoryJsonPath = `${childPath}/_category_.json`;
                let catProps: any = {};
                if (fs.existsSync(categoryJsonPath)) {
                    try {
                        catProps = JSON.parse(fs.readFileSync(categoryJsonPath, 'utf8'));
                    } catch (e) {
                         console.warn(`Warning: Failed to parse ${categoryJsonPath}:`, e);
                    }
                }

                let categoryLink = catProps.link;
                if (categoryLink && categoryLink.type === 'doc' && categoryLink.id) {
                    let docId: string = categoryLink.id.replace(/\.mdx?$/, '');
                    // if they provided just the filename without the path, append the component's path
                    if (!docId.includes('/')) {
                        docId = `${childPath}/${docId}`;
                    }
                    categoryLink = { ...categoryLink, id: docId };
                } else if (!categoryLink && isDirIndex) {
                    categoryLink = { type: 'doc', id: `${childPath}/${indexName}` };
                }

                // Filter out the document that acts as the index for this category so it doesn't appear twice
                const cleanChildItems = childItems.filter(item => {
                    const isIndexDoc = categoryLink && categoryLink.type === 'doc' &&
                        typeof item === 'object' && item !== null && item.type === 'doc' && item.id === categoryLink.id;
                    return !isIndexDoc;
                });

                let embeddedItems: SidebarItemConfig[] = [];
                if (categoryLink && categoryLink.type === 'doc' && categoryLink.id) {
                    // Teleport into externally linked module domains to prevent orphaning nested docs in Docusaurus's registry
                    // This triggers when a category is manually linked to a document outside its own directory.
                    // By fetching the items from that mapped directory and embedding them here, Docusaurus can correctly
                    // associate the nested documents with this category's sidebar, avoiding "orphaned" document warnings.
                    const mappedDir = categoryLink.id.replace(/\/index$/i, '').replace(/\/README$/i, '');
                    if (mappedDir !== childPath && fs.existsSync(mappedDir) && fs.statSync(mappedDir).isDirectory()) {
                        embeddedItems = getSidebarItemsForDir(mappedDir).filter(item => {
                            const isIndexDoc = typeof item === 'object' && item !== null && item.type === 'doc' && item.id === categoryLink.id;
                            return !isIndexDoc;
                        });
                    }
                }

                const finalChildItems = [...cleanChildItems, ...embeddedItems];

                const baseLabel = formatLabel(dirent.name);
                let fallbackLabel = baseLabel;

                // Try to infer a nice label from the specifically targeted index document
                if (categoryLink && categoryLink.type === 'doc' && categoryLink.id !== `${childPath}/${indexName}`) {
                    const customDocMd = `${dirPath}/${dirent.name}/${categoryLink.id.split('/').pop()}.md`;
                    const customDocMdx = `${customDocMd}x`;
                    fallbackLabel = fs.existsSync(customDocMdx) ? getTitleFromMd(customDocMdx, baseLabel) : 
                                    (fs.existsSync(customDocMd) ? getTitleFromMd(customDocMd, baseLabel) : baseLabel);
                } else {
                    const actualIndexPath = fs.existsSync(indexPathMdx) ? indexPathMdx : indexPath;
                    fallbackLabel = isDirIndex ? getTitleFromMd(actualIndexPath, baseLabel) : baseLabel;
                }

                const label = catProps.label || fallbackLabel;

                // If the directory only has an index/README file (no other files or folders),
                // just return the doc item to avoid empty categories
                if (categoryLink && categoryLink.type === 'doc' && finalChildItems.length === 0) {
                    return {
                        type: 'doc',
                        id: categoryLink.id,
                        label: label
                    } as SidebarItemConfig;
                }

                // Skip directories with no content at all (no index, no children)
                if (!categoryLink && finalChildItems.length === 0) {
                    return null;
                }

                return {
                    type: 'category',
                    label: label,
                    ...(catProps.collapsed !== undefined && { collapsed: catProps.collapsed }),
                    ...(catProps.collapsible !== undefined && { collapsible: catProps.collapsible }),
                    ...(catProps.className && { className: catProps.className }),
                    customProps: {
                         ...catProps.customProps,
                         ...(typeof catProps.position === 'number' && { position: catProps.position })
                    },
                    ...(categoryLink && { link: categoryLink }),
                    items: finalChildItems
                } as SidebarItemConfig;
            } else if (dirent.name.endsWith('.md') || dirent.name.endsWith('.mdx')) {
                const isReadmeOrIndex = dirent.name === 'README.md' || dirent.name === 'index.md' || dirent.name === 'README.mdx' || dirent.name === 'index.mdx';
                const baseName = dirent.name.replace(/\.mdx?$/, '');
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