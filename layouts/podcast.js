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
        <h2>{content.album}</h2>
        <p>{content.date}</p>
        <h3>
          {content.author} - {content.year}
        </h3>
        <Image src={content.albumImageUrl} width='300' height='300' />
        <div className={styles.playerWrapper}>
          <ReactPlayer
            width='100%'
            height='100%'
            className={styles.player}
            url={content.videourl}
          />
        </div>{' '}
        <div className={styles.contentTextContainer}>{children}</div>
        <ButtonBack linkReference='/podcast' msg='Back to Podcast' />
      </article>
    </PodcastContainer>
  );
}
