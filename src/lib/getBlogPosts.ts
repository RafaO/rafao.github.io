import futureOfDevEnvironments from '../content/blog/future-of-dev-environments.md?raw';
import buildingBetterDevTools from '../content/blog/building-better-dev-tools.md?raw';
import cloudDevelopment from '../content/blog/cloud-development.md?raw';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const blogFiles = {
  'future-of-dev-environments': futureOfDevEnvironments,
  'building-better-dev-tools': buildingBetterDevTools,
  'cloud-development': cloudDevelopment,
};

export function getBlogPosts(): BlogPost[] {
  return Object.entries(blogFiles)
    .map(([slug, content]) => {
      const { data, content: markdown } = matter(content);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: markdown,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}