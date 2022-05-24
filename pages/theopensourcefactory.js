import React, { useEffect, useState } from 'react';
import { connectToDatabase } from '../lib/mongodb2';
import styles from '../styles/TOSF.module.css';
import ReactPlayer from 'react-player';
import { AiFillGithub } from 'react-icons/ai';
import { ImIcoMoon } from 'react-icons/im';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const projects = await db.collection('projects').find({}).toArray();
  projects.sort((a, b) => (+a.number > +b.number ? 1 : -1));
  return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
}

const theopensourcefactory = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((x, index) => {
        if (!x.youtubeVideoId) return;
        return <Project key={index} x={x} />;
      })}
    </div>
  );
};

const Project = ({ x }) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={`https://www.youtube.com/watch?v=${x.youtubeVideoId}`}
          width='100%'
          height='100%'
          playing={true}
          controls={true}
          muted={true}
        />
      </div>
      {x.url !== '#' ? (
        x.url !== 'http://www.drip-work.app' ? (
          <a className={styles.url} href={x.url} target='_blank'>
            {x.url}
          </a>
        ) : (
          <a
            className={styles.url}
            href='https://ancient-spire-82753.herokuapp.com/login'
            target='_blank'
          >
            {x.url}
          </a>
        )
      ) : (
        <a className={styles.url} href='#'>
          Failed one!
        </a>
      )}

      <p className={styles.projectTagline}>{x.sentence}</p>
      <div className={styles.iconsContainer}>
        <a href={x.githubRepo} target='_blank' rel='noreferrer'>
          <AiFillGithub />
        </a>
        <a
          href={`http://www.theopensourcefactory.com/projects/${x.projectId}`}
          target='_blank'
          rel='noreferrer'
        >
          <ImIcoMoon size={16} />
        </a>
      </div>
    </div>
  );
};

export default theopensourcefactory;
