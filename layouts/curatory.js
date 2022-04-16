import Image from 'next/image';
import Container from 'components/Container';
import styles from './curatory.module.css';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';
import React from 'react';
import ShareButtons from '../components/Layout/ShareButtons';

export default function CuratoryLayout({ children, content }) {
  console.log('the content is:', content);
  return (
    <Container title={'· jp · thoughts · ' + content.title} date={content.date}>
      <article className={styles.contentContainer}>
        <h1>{content.title}</h1>
        {content.author && (
          <h3 className={styles.authorText}>{content.author}</h3>
        )}
        <div className={styles.playerWrapper}>
          <ReactPlayer
            width='100%'
            height='100%'
            className={styles.player}
            url={content.url}
          />
        </div>
        <hr />
        <div className={styles.contentTextContainer}>{children}</div>
        <ButtonBack linkReference='/thoughts' msg='Back to Thoughts' />
      </article>
    </Container>
  );
}
