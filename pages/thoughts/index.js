import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import YogaPage from '../../components/Yoga/YogaPage';
import { allThoughtsPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  return { props: { thoughtLogs: allThoughtsPages } };
}

export default function Thoughts({ thoughtLogs }) {
  const Component = useMDXComponent(thoughtLogs[0].body.code);
  return (
    <div>
      <Head>
        <title>· jp · thoughts</title>
      </Head>
      <PageLayout>
        <h1>Thoughts</h1>
        <h2>
          This is where I share what I write so that I can integrate the content
          that I consume and the ideas that come through my mind.
        </h2>
        <ElementsList>
          <Component components={{ ...components }} />
        </ElementsList>
      </PageLayout>
    </div>
  );
}
