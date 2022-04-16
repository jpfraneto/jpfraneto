import Image from 'next/image';
import Container from 'components/Container';
import styles from './project.module.css';
import ReactPlayer from 'react-player';
import ButtonBack from '../components/Layout/ButtonBack';
import React from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

export default function ProjectLayout({ children, content }) {
  return (
    <Container
      title={`· jp · programming · ${content.name}`}
      date={content.date}
    >
      <article className={styles.contentContainer}>
        <h1>
          {content.name}{' '}
          <a
            href={content.githubrepo}
            className={styles.githubIcon}
            target='_blank'
          >
            <AiFillGithub />
          </a>
        </h1>
        <a
          className={styles.productionUrlLink}
          href={content.productionurl}
          target='_blank'
        >
          <h2>{content.productionurl}</h2>
        </a>

        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.player}
            controls='true'
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
