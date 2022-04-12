import Image from 'next/image';
import PodcastContainer from '../components/Containers/PodcastContainer';
import styles from './podcast.module.css';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';
import React from 'react';

export default function PodcastLayout({ children, content }) {
  return (
    <PodcastContainer date={content.date}>
      <article className={styles.contentContainer}>
        <h1>{content.guest}</h1>
        <h2>{content.albumtitle}</h2>
        <h3>
          {content.albumartist} - {content.albumyear}
        </h3>
        <ReactPlayer url={content.episodeUrl} />
        <div className={styles.contentTextContainer}>{children}</div>
        <Image src={content.albumImageUrl} width='300' height='300' />
        <br />
        <ButtonBack linkReference='/podcast' msg='Back to Podcast' />
      </article>
    </PodcastContainer>
  );
}
