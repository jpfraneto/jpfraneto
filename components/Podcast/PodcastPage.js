import React, { useState } from 'react';
import EpisodeCard from './EpisodeCard';
import styles from './PodcastPage.module.css';
import Image from 'next/image';
import ReactPlayer from 'react-player';
const arr = new Array(8).fill({ id: Math.random() });

const PodcastPage = () => {
  const [chosenEpisode, setChosenEpisode] = useState({
    episodeUrl: 'https://www.youtube.com/watch?v=mUToNt5fWFE',
    invitee: 'Diana Vergara',
    album: {
      title: 'Shivoham',
      author: 'Ankara',
      year: '1998',
      listenUrl:
        'https://open.spotify.com/album/4C1wE7kvtY1Lrkh8WMfyTe?si=71sveMAtSwCMxhE4U9U60A',
      coverImage:
        'https://i.discogs.com/hgdfOLIrDncrp6Okziecko_QqNcQiWAw4mu6B76bfxU/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxOTMy/Mzg5LTE2NDQwNjI5/OTItNTMyNy5qcGVn.jpeg',
    },
  });
  return (
    <div className={styles.main}>
      {' '}
      <div className={styles.mainContainer}>
        <h1>JP's Podcast</h1>
        <p>
          If you died tomorrow, what album would you take to the other side?
        </p>
        <div className={styles.playerWrapper}>
          <ReactPlayer
            width='100%'
            height='100%'
            url={chosenEpisode.episodeUrl}
          />
        </div>

        {chosenEpisode && (
          <div className={styles.episodeInformation}>
            <Image
              src={chosenEpisode.album.coverImage}
              width='150px'
              height='150px'
            />
            <div className={styles.episodeText}>
              <h3>{chosenEpisode.invitee}</h3>
              <h2>{chosenEpisode.album.title}</h2>
              <h3>{chosenEpisode.album.author}</h3>
              <h4>{chosenEpisode.album.year}</h4>
              <div className={styles.listenAlbumBtnContainer}>
                {' '}
                <a
                  className={styles.listenAlbumBtn}
                  href={chosenEpisode.album.listenUrl}
                  target='_blank'
                >
                  Listen Album
                </a>
              </div>
            </div>
          </div>
        )}

        <div className={styles.episodesContainer}>
          {arr.map(x => (
            <EpisodeCard key={x.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
