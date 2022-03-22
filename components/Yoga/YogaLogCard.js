import React from 'react';
import styles from './YogaLogCard.module.css';
import Link from 'next/link';

const YogaLogCard = ({ log }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.loomRecordingContainer}>
        <div
          style={{ position: 'relative', paddingBottom: 62.5 + '%', height: 0 }}
        >
          <iframe
            src={log.loomRecording.replace('share', 'embed')}
            frameborder='0'
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>
      </div>
      <h3>{log.title}</h3>
      <h5>{log.date}</h5>
      <Link href={log.url}>
        <a>Visit</a>
      </Link>
    </div>
  );
};

export default YogaLogCard;
