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
  external?: string;
}

const internalBlogFiles = {
  'future-of-dev-environments': futureOfDevEnvironments,
  'building-better-dev-tools': buildingBetterDevTools,
  'cloud-development': cloudDevelopment,
};

const externalBlogPosts: BlogPost[] = [
  {
    slug: 'Trivago Android Architecture',
    title: 'Trivago Android Architecture',
    date: '2024-01-15',
    excerpt: 'How we rebuilt our Android app using the new architecture components.',
    content: '',
    external: 'https://tech.trivago.com/post/android-new-architecture'
  },
  {
    slug: 'mobile-architecture',
    title: 'Modern Mobile Architecture Patterns',
    date: '2024-02-01',
    excerpt: 'Exploring different architectural patterns in mobile development and their impact on app maintainability.',
    content: '',
    external: 'https://dev.to/rafao/modern-mobile-architecture-patterns'
  }
];

export function getBlogPosts(): BlogPost[] {
  const internalPosts = Object.entries(internalBlogFiles)
    .map(([slug, content]) => {
      const { data, content: markdown } = matter(content);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: markdown,
      };
    });

  return [...internalPosts, ...externalBlogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}