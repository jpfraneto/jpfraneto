import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { allBlogPosts } from 'contentlayer/generated';

export async function getStaticProps() {
  return { props: { posts: allBlogPosts } };
}

export default function BlogPosts({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog Posts!</title>
      </Head>
      {posts.map(post => (
        <div>
          <p>{post.title}</p>
          <Link href={`/blog/${post.slug}`}>
            <a>GO to blog post</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
