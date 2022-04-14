import Image from 'next/image';
import Container from 'components/Container';
import styles from './project.module.css';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';
import React from 'react';
import Link from 'next/link';

export default function ProjectLayout({ children, content }) {
  return (
    <Container title={content.title} date={content.date}>
      <article className={styles.contentContainer}>
        <h1>{content.name}</h1>
        <a href={content.productionurl} target='_blank'>
          <h2>{content.productionurl}</h2>
        </a>

        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.player}
            playing
            url={content.videourl}
            width='100%'
            height='100%'
          />
        </div>

        <div className={styles.contentTextContainer}>{children}</div>
        <ButtonBack linkReference='/programming' msg='Back to Programming' />
      </article>
    </Container>
  );
}
