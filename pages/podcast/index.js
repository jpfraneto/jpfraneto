import React, { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Podcast.module.css';
import { allPodcastEpisodes } from 'contentlayer/generated';
import { connectToDatabase } from '../../lib/mongodb';

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const presentEpisode = await db
    .collection('podcast')
    .findOne({ status: 'present' });
  return {
    props: { presentEpisode: JSON.parse(JSON.stringify(presentEpisode)) },
  };
}

const AlbumContainer = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.albumContainer}>{children}</div>
    </Fragment>
  );
};

export default function PodcastEpisodes({ presentEpisode }) {
  console.log('the present episode is: ', presentEpisode);
  return (
    <div className={styles.container}>
      <Head>
        <title>Podcast Episodes</title>
      </Head>
      <main className={styles.mainContainer}>
        <AlbumContainer>
          <h2>PAST</h2>
        </AlbumContainer>
        <AlbumContainer>
          <h2>PRESENT</h2>
          <h3>072022IV</h3>
          <div className={styles.albumCoverContainer}>
            <Image
              src='https://upload.wikimedia.org/wikipedia/en/d/d5/Chants_of_India_1997_front_cover.jpg'
              alt='Album Cover'
              width='300'
              height='300'
            />
          </div>

          <div>
            <h2>Ravi Shankar</h2>
            <h3>Chants of India</h3>
            <h4>1997</h4>
            <h3>Diana Vergara</h3>
          </div>
          <Link href={`/podcast/${'072022IV'}`}>
            <a>Check this out</a>
          </Link>
        </AlbumContainer>
        <AlbumContainer>
          <h2>FUTURE</h2>
          <p>Si murieras mañana, qué disco te llevarías al otro lado?</p>
          <hr />
          <p>
            If you died tomorrow, what album would you take to the other side?
          </p>
          <Link href='/podcast/new'>
            <a>I want to answer this question</a>
          </Link>
        </AlbumContainer>
      </main>
    </div>
  );
}
