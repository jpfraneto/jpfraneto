import { useRouter } from 'next/router';
import React, { useState, useContext } from 'react';
import LanguageContext from '../../pages/context/Language';
import styles from './YogaLayout.module.css';

const YogaLayout = ({ content }) => {
  const router = useRouter();
  const value = useContext(LanguageContext);
  const [newLang, setNewLang] = useState(value.state.languageSelected);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.innerContainer}>
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
      </div>
      <div className={styles.navContainer}>
        <h3>Otros kriyas:</h3>
        {newLang}
        <br />
        <input
          type='text'
          placeholder='lang'
          onChange={e => setNewLang(e.target.value)}
        />
        <button
          onClick={() => {
            value.setLanguageSelected(newLang);
          }}
        >
          Set new lang
        </button>
      </div>
    </div>
  );
};

export default YogaLayout;
