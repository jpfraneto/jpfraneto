import Image from 'next/image';
import Container from 'components/Container';
import styles from './curatory.module.css';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';
import React from 'react';

export default function CuratoryLayout({ children, content }) {
  return (
    <Container title={content.title} date={content.date}>
      <article className={styles.contentContainer}>
        <h1>{content.title}</h1>
        {content.author && (
          <h3 className={styles.authorText}>{content.author}</h3>
        )}
        <div className={styles.playerWrapper}>
          <ReactPlayer
            width='100%'
            height='100%'
            className={styles.reactPlayer}
            url={content.url}
          />
        </div>
        <hr />
        <div className={styles.contentTextContainer}>{children}</div>
        <ButtonBack linkReference='/curatory' msg='Back to Curatory' />
      </article>
    </Container>
  );
}
