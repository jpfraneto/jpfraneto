import React from 'react';
import styles from './RecordingCard.module.css';
import Link from 'next/link';

const RecordingCard = ({ recording }) => {
  console.log('inside the card!', recording);
  if (!recording) return <div></div>;

  return (
    <div className={styles.recordingCardContainer}>
      <div
        style={{ position: 'relative', paddingBottom: '62.5%', height: '0' }}
      >
        <iframe
          width='100'
          height='59'
          src={recording.replace('share', 'embed')}
          frameborder='0'
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecordingCard;
