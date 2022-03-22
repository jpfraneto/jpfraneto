import React from 'react';
import styles from './ContentLayout.module.css';
import LinkedButton from '../Utils/LinkedButton';
import { useRouter } from 'next/router';

const ContentLayout = ({ content }) => {
  const router = useRouter();
  return (
    <div className={styles.contentContainer}>
      <h1>
        {content.index}. {content.title}
      </h1>
      <p>{content.date}</p>
      <p>
        <strong>Kriya: </strong>
        {content.kriya}
      </p>
      {content.loomRecording ? (
        <div className={styles.loomRecordingContainer}>
          <div
            style={{
              position: 'relative',
              paddingBottom: 62.5 + '%',
              height: 0,
            }}
          >
            <iframe
              src={content.loomRecording.replace('share', 'embed')}
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
        </div>
      ) : (
        <p>There is no recording here!</p>
      )}
      <div
        className='cl-post-body'
        dangerouslySetInnerHTML={{ __html: content.body.raw }}
      />

      <button onClick={() => router.back()}>Go Back!</button>
    </div>
  );
};

export default ContentLayout;
