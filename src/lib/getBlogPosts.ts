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
  // 'future-of-dev-environments': futureOfDevEnvironments,
  // 'building-better-dev-tools': buildingBetterDevTools,
  // 'cloud-development': cloudDevelopment,
};

const externalBlogPosts: BlogPost[] = [
  {
    slug: 'Trivago Android Architecture',
    title: 'Trivago Android Architecture',
    date: '2018-02-06',
    excerpt: 'How we rebuilt our Android app using the new architecture components.',
    content: '',
    external: 'https://tech.trivago.com/post/android-new-architecture'
  },
  {
    slug: 'flutter-native-integration',
    title: 'Communication between Flutter and native modules.',
    date: '2018-05-01',
    excerpt: 'Exploring how to communicate Flutter with native code in mobile apps.',
    content: '',
    external: 'https://medium.com/proandroiddev/communication-between-flutter-and-native-modules-9b52c6a72dd2'
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