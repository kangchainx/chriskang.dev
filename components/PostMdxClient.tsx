'use client';

import React from 'react';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

interface PostMdxClientProps {
  source: MDXRemoteSerializeResult;
}

const mdxComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-sm leading-relaxed text-foreground/90" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="underline decoration-border hover:decoration-foreground transition-colors" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt ?? ''}
      loading={props.loading ?? 'lazy'}
      className={`w-full h-auto rounded-lg border border-border/60 ${props.className ?? ''}`}
    />
  ),
};

export function PostMdxClient({ source }: PostMdxClientProps) {
  return (
    <div className="space-y-3">
      <MDXRemote {...source} components={mdxComponents} />
    </div>
  );
}

