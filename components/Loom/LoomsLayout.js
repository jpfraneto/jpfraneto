import React from 'react';
import styles from './LoomsLayout.module.css';

const LoomsLayout = ({ looms }) => {
  return (
    <div className={styles.mainLayoutContainer}>
      {looms.looms.map(loom => (
        <div key={loom._id} className={styles.loomRecordingContainer}>
          <div
            style={{
              position: 'relative',
              paddingBottom: 62.5 + '%',
              height: 0,
            }}
          >
            <iframe
              src={loom.videoInfo.embedUrl}
              frameborder='0'
              webkitAllowFullscreen
              mozAllowFullscreen
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
          <p>{loom.videoInfo.guestName}</p>
        </div>
      ))}
    </div>
  );
};

export default LoomsLayout;
