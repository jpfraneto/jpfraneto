import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { allPodcastPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  return { props: { podcastLogs: allPodcastPages } };
}

export default function PodcastLogs({ podcastLogs }) {
  const Component = useMDXComponent(podcastLogs[0].body.code);
  return (
    <div>
      <Head>
        <title>JPcast</title>
      </Head>
      <PageLayout>
        <h1>My Podcast</h1>
        <h2>
          If you died tomorrow, what album would you take to the other side?
        </h2>
        <ElementsList>
          <Component components={{ ...components }} />
        </ElementsList>
      </PageLayout>
    </div>
  );
}
