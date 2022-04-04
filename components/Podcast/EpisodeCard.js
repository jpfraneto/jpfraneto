import React from 'react';
import styles from './EpisodeCard.module.css';
import Image from 'next/image';

const EpisodeCard = ({ episode, setChosenEpisode }) => {
  return (
    <div
      onClick={() => setChosenEpisode(episode)}
      className={styles.episodeContainer}
    >
      <Image src={episode.album.coverImage} width='150px' height='150px' />
      <h4>022022IV</h4>
    </div>
  );
};

export default EpisodeCard;
