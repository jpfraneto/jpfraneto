import React from 'react';
import { allPodcastEpisodes } from 'contentlayer/generated';
import components from 'components/MDXComponents';
import PodcastLayout from 'layouts/podcast';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allPodcastEpisodes.map(episode => {
    return { params: { date: episode.date } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const episode = allPodcastEpisodes.find(episode => {
    return episode.date === params.date;
  });
  return { props: { episode } };
}

export default function Podcast({ episode }) {
  const Component = useMDXComponent(episode.body.code);
  return (
    <PodcastLayout content={episode}>
      <Component components={{ ...components }} />
    </PodcastLayout>
  );
}
