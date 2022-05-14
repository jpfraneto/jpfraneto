import React, { useEffect, useState } from 'react';
import { connectToDatabase } from '../lib/mongodb2';
import styles from '../styles/TOSF.module.css';
import ReactPlayer from 'react-player';

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
    <div>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={`https://www.youtube.com/watch?v=${x.youtubeVideoId}`}
          width='100%'
          height='100%'
          playing={true}
          muted={true}
        />
      </div>
      {x.url !== '#' ? (
        <a className={styles.url} href={x.url} target='_blank'>
          {x.url}
        </a>
      ) : (
        <a className={styles.url} href='#'>
          Failed one!
        </a>
      )}

      <h3>{x.date}</h3>
    </div>
  );
};

export default theopensourcefactory;
