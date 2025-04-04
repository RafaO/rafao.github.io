import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

export function BlogPost({ title, date, content }: BlogPostProps) {
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