import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { allPodcastEpisodes } from 'contentlayer/generated';

export async function getStaticProps() {
  return { props: { episodes: allPodcastEpisodes } };
}

export default function PodcastEpisodes({ episodes }) {
  console.log('the episodes are: ', episodes);
  return (
    <div>
      <Head>
        <title>Podcast Episodes</title>
      </Head>
      {episodes.map(episode => (
        <div>
          <Link href={`/podcast/${episode.date}`} passHref>
            <Image src={episode.albumImageUrl} width='150' height='150' />
          </Link>
        </div>
      ))}
    </div>
  );
}
