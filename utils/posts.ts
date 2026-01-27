import { marked } from 'marked';
import { BlogPost } from '../types';

// Import all markdown files from /post directory at build time
const postModules = import.meta.glob('/post/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

function parseFilename(filepath: string): { date: string; slug: string } {
  // Extract filename from path: /post/2023-11-15-redis-troubleshooting.md
  const filename = filepath.split('/').pop()?.replace('.md', '') || '';
  // Parse date (first 10 chars: YYYY-MM-DD) and slug (rest after the date and hyphen)
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);

  if (dateMatch) {
    return {
      date: dateMatch[1],
      slug: dateMatch[2]
    };
  }

  return { date: '', slug: filename };
}

function formatDate(dateStr: string): string {
  // Convert YYYY-MM-DD to YYYY.MM.DD format
  return dateStr.replace(/-/g, '.');
}

// Simple frontmatter parser (browser-compatible, no Buffer needed)
function parseFrontmatter(content: string): { data: PostFrontmatter; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {
      data: { title: '', description: '', date: '', tags: [] },
      content: content
    };
  }

  const [, frontmatterStr, markdownContent] = match;
  const data: PostFrontmatter = { title: '', description: '', date: '', tags: [] };

  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split(/\r?\n/);
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key === 'title') {
      data.title = value;
    } else if (key === 'description') {
      data.description = value;
    } else if (key === 'date') {
      data.date = value;
    } else if (key === 'tags') {
      // Parse array: ["tag1", "tag2"]
      const tagsMatch = value.match(/\[(.*)\]/);
      if (tagsMatch) {
        data.tags = tagsMatch[1]
          .split(',')
          .map(tag => tag.trim().replace(/^["']|["']$/g, ''));
      }
    }
  }

  return { data, content: markdownContent };
}

function parsePost(filepath: string, content: string): BlogPost {
  const { data: frontmatter, content: markdownContent } = parseFrontmatter(content);
  const { slug } = parseFilename(filepath);

  // Convert markdown to HTML
  const htmlContent = marked(markdownContent) as string;

  // Use frontmatter date or extract from filename
  const date = frontmatter.date
    ? formatDate(frontmatter.date.replace(/"/g, ''))
    : formatDate(parseFilename(filepath).date);

  return {
    id: slug,
    title: frontmatter.title || slug,
    description: frontmatter.description || '',
    date,
    tags: frontmatter.tags || [],
    content: htmlContent
  };
}

// Cache parsed posts
let postsCache: BlogPost[] | null = null;

export function loadPosts(): BlogPost[] {
  if (postsCache) {
    return postsCache;
  }

  const posts: BlogPost[] = [];

  for (const [filepath, content] of Object.entries(postModules)) {
    try {
      const post = parsePost(filepath, content);
      posts.push(post);
    } catch (error) {
      console.error(`Failed to parse post: ${filepath}`, error);
    }
  }

  // Sort by date descending (newest first)
  posts.sort((a, b) => {
    const dateA = a.date.replace(/\./g, '-');
    const dateB = b.date.replace(/\./g, '-');
    return dateB.localeCompare(dateA);
  });

  postsCache = posts;
  return posts;
}

export function getPost(id: string): BlogPost | undefined {
  const posts = loadPosts();
  return posts.find(post => post.id === id);
}

export function getAllPostIds(): string[] {
  return loadPosts().map(post => post.id);
}
