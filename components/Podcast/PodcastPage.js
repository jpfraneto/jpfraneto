import React, { useState } from 'react';
import EpisodeCard from './EpisodeCard';
import styles from './PodcastPage.module.css';
import Image from 'next/image';
import ReactPlayer from 'react-player';
const arr = new Array(8).fill({
  id: Math.random(),
  episodeUrl: 'https://www.youtube.com/watch?v=mUToNt5fWFE',
  date: '042022IV',
  guest: 'Diana Vergara',
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

const PodcastPage = ({ episodes }) => {
  const [chosenEpisode, setChosenEpisode] = useState(null);
  return (
    <div className={styles.main}>
      {' '}
      <div className={styles.mainContainer}>
        <h1>JP's Podcast</h1>
        <p>
          If you died tomorrow, what album would you take to the other side?
        </p>

        {!chosenEpisode && (
          <div className={styles.episodeInformation}>
            <p>Select an album down below</p>
          </div>
        )}

        {chosenEpisode && (
          <div className={styles.episodeInformation}>
            <div className={styles.playerWrapper}>
              <ReactPlayer
                width='100%'
                height='100%'
                url={chosenEpisode.episodeUrl}
                controls='true'
              />
            </div>
            <div className={styles.episodeInfoContainer}>
              <Image
                src={chosenEpisode?.album?.coverImage}
                width='150px'
                height='150px'
                style={{ borderRadius: '8px' }}
              />
              <div className={styles.episodeText}>
                <h5>{chosenEpisode.date}</h5>
                <h3>{chosenEpisode.guest}</h3>
                <a
                  style={{ color: 'white' }}
                  target='_blank'
                  href={`https://www.${chosenEpisode.guestSocialMediaProvider}.com/${chosenEpisode.guestSocialMedia}`}
                >
                  @{chosenEpisode.guestSocialMedia}
                </a>
                <h2>{chosenEpisode.album?.title}</h2>
                <h3>{chosenEpisode.album?.author}</h3>
                <h4>{chosenEpisode.album?.year}</h4>
                <div className={styles.listenAlbumBtnContainer}>
                  {' '}
                  <a
                    className={styles.listenAlbumBtn}
                    href={chosenEpisode.album?.listenUrl}
                    target='_blank'
                  >
                    Listen Album
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.episodesContainer}>
          {episodes.map((x, index) => (
            <EpisodeCard
              key={x._id}
              episode={x}
              setChosenEpisode={setChosenEpisode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
