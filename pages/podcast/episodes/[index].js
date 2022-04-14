import React from 'react';
import components from '../../../components/MDXcomponents';
import PodcastLayout from 'layouts/podcast';
import { allPodcastEpisodes } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allPodcastEpisodes.map(episode => {
    return { params: { index: episode.index.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisEpisode = allPodcastEpisodes.filter(
    x => +x.index === +params.index
  );
  return { props: { episode: JSON.parse(JSON.stringify(thisEpisode[0])) } };
}

export default function ProgrammingProjectPage({ episode }) {
  console.log('the episode is: ', episode);
  const Component = useMDXComponent(episode.body.code);
  return (
    <PodcastLayout content={episode}>
      <Component components={{ ...components }} />
    </PodcastLayout>
  );
}
