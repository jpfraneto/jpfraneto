import React from 'react';
import styles from './EpisodeCard.module.css';
import Image from 'next/image';

const EpisodeCard = () => {
  return (
    <div className={styles.episodeContainer}>
      <Image
        src='https://i.discogs.com/hgdfOLIrDncrp6Okziecko_QqNcQiWAw4mu6B76bfxU/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxOTMy/Mzg5LTE2NDQwNjI5/OTItNTMyNy5qcGVn.jpeg'
        width='150px'
        height='150px'
      />
      <h4>022022IV</h4>
    </div>
  );
};

export default EpisodeCard;
