import React from 'react';
import Image from 'next/image';
import styles from './AlbumCard.module.css';

const AlbumCard = ({ album }) => {
  return (
    <div
      className={styles.albumCardContainer}
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px auto',
      }}
    >
      <div
        style={{ width: '200px', height: '200px', border: 'solid black 2px' }}
      >
        {album.image && (
          <Image
            src={album.image}
            width='200px'
            height='200px'
            alt='Album Image'
          />
        )}
      </div>
      <p>{album.name}</p>
      <h3>{album.artist}</h3>
      <p>{album.year}</p>
    </div>
  );
};

export default AlbumCard;
