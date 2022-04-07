import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { allPodcastEpisodes } from 'contentlayer/generated';

export async function getStaticProps() {
  return { props: { episodes: allPodcastEpisodes } };
}

export default function PodcastEpisodes({ episodes }) {
  return (
    <div>
      <Head>
        <title>Podcast Episodes</title>
      </Head>
      <main></main>
    </div>
  );
}
