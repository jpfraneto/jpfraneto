import React from 'react';
import { allBlogPosts } from 'contentlayer/generated';
import components from '../../components/MDXcomponents';
import BlogLayout from 'layouts/blog';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allBlogPosts.map(post => {
    return { params: { slug: post.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogPosts.find(post => {
    return post.slug === params.slug;
  });
  return { props: { post } };
}

export default function BlogPost({ post }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout content={post}>
      <Component components={{ ...components }} />
    </BlogLayout>
  );
}
