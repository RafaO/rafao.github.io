import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  external?: string;
}

export function BlogPost({ title, date, content, external }: BlogPostProps) {
  if (external) {
    return (
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        <time className="text-blue-400 mb-8 block">
          {format(new Date(date), 'MMMM d, yyyy')}
        </time>
        <a 
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read on external site <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
      <time className="text-blue-400 mb-8 block">
        {format(new Date(date), 'MMMM d, yyyy')}
      </time>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        className="text-gray-300"
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}