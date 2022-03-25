import React, { useState, useEffect } from 'react';
import styles from '../styles/Guests.module.css';

import { connectToDatabase } from '../lib/mongodb';

import LoomsLayout from '../components/Loom/LoomsLayout';

import { setup, isSupported } from '@loomhq/record-sdk';
import { oembed } from '@loomhq/loom-embed';

const BUTTON_ID = 'loom-record-sdk-button';

const GuestsPage = ({ looms }) => {
  const [videoHTML, setVideoHTML] = useState();
  const [videoInfo, setVideoInfo] = useState({});
  const [sayHello, setSayHello] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loomVideos, setLoomVideos] = useState(looms);
  useEffect(() => {
    async function setupLoom() {
      const { supported, error } = await isSupported();

      if (!supported) {
        console.warn(`Error setting up Loom: ${error}`);
        return;
      }

      const button = document.getElementById(BUTTON_ID);

      if (!button) {
        return;
      }
      const { configureButton } = await setup({
        publicAppId: process.env.NEXT_PUBLIC_LOOM_PUBLIC_APP_ID,
      });

      const sdkButton = configureButton({ element: button });

      sdkButton.on('insert-click', async video => {
        const { html } = await oembed(video.sharedUrl, { width: 400 });
        setVideoHTML(html);
        setVideoInfo(video);
      });
    }
    setupLoom();
  });
  const handleChange = e => {
    setVideoInfo(info => ({ ...videoInfo, [e.target.name]: e.target.value }));
  };
  const addVideoToDB = async () => {
    if (!videoInfo.guestName) return alert('please add the name!');
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        videoInfo,
      }),
    };
    setLoading(true);
    const response = await fetch('/api/loom', reqParams);
    const data = await response.json();
    setLoading(false);
    setSayHello(false);
    setLoomVideos(prev => [...prev, { _id: data.insertedId, videoInfo }]);
  };
  return (
    <div className={styles.guestsContainer}>
      <>
        {' '}
        <button
          className={styles.sayHelloBtn}
          onClick={() => setSayHello(!sayHello)}
        >
          {!sayHello ? 'Say Hello!' : 'Dont say Hello!'}
        </button>
        <LoomsLayout looms={loomVideos} />
        {sayHello && (
          <div className={styles.loomRecorderContainer}>
            {loading ? (
              <p>Loading!!</p>
            ) : (
              <>
                {' '}
                <p>Click this button to spread a message:</p>
                <button
                  className={styles.loomRecorderBtn}
                  id={BUTTON_ID}
                ></button>
                <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
                {videoHTML && (
                  <div>
                    <div>
                      <input
                        className={styles.nameInputField}
                        type='text'
                        name='guestName'
                        placeholder='Who are you?'
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                <button
                  type='button'
                  className={styles.addRecordingBtn}
                  onClick={addVideoToDB}
                >
                  Add Message
                </button>
              </>
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default GuestsPage;

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const data = await db.collection('looms').find({}).toArray();
  return {
    props: {
      looms: JSON.parse(JSON.stringify(data)),
    },
  };
}
