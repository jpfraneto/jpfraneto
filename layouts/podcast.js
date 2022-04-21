import Image from 'next/image';
import PodcastContainer from '../components/Containers/PodcastContainer';
import styles from './podcast.module.css';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';
import React from 'react';

export default function PodcastLayout({ children, content }) {
  return (
    <PodcastContainer
      title={`· jp · podcast · @${content.guest}`}
      date={content.date}
    >
      <article className={styles.contentContainer}>
        <h2>{content.album}</h2>
        <h3>
          {content.author} - {content.year}
        </h3>
        <p>{content.date}</p>
        <h4>
          Conversation with{' '}
          {content.guest ? (
            <a
              style={{
                color: 'white',
                marginLeft: '4px',
                textDecoration: 'none',
              }}
              target='_blank'
              href={`https://www.instagram.com/${content.guest}`}
            >
              @{content.guestname}
            </a>
          ) : (
            <span>{content.guestname}</span>
          )}
        </h4>

        <Image src={content.albumImageUrl} width='300' height='300' />
        <p>
          <a
            className={styles.spotifyLink}
            target='_blank'
            href={content.spotifyLink}
          >
            Listen in Spotify
          </a>
        </p>
        <div className={styles.contentTextContainer}>{children}</div>
        <ButtonBack linkReference='/podcast' msg='Back to Podcast' />
      </article>
    </PodcastContainer>
  );
}
