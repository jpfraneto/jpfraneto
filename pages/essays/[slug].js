import React from 'react';
import { allEssayLogs } from 'contentlayer/generated';
import components from '../../components/MDXcomponents';
import BlogLayout from 'layouts/blog';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allEssayLogs.map(log => {
    return { params: { slug: log.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const log = allEssayLogs.find(log => {
    return log.slug === params.slug;
  });
  return { props: { log } };
}

export default function Blog({ log }) {
  const Component = useMDXComponent(log.body.code);
  return (
    <BlogLayout content={log}>
      <Component components={{ ...components }} />
    </BlogLayout>
  );
}
