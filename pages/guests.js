import React, { useState, useEffect } from 'react';
import styles from '../styles/Guests.module.css';

import { setup, isSupported } from '@loomhq/record-sdk';
import { oembed } from '@loomhq/loom-embed';

const BUTTON_ID = 'loom-record-sdk-button';

const GuestsPage = () => {
  const [videoHTML, setVideoHTML] = useState('');
  const [videoInfo, setVideoInfo] = useState({});
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
  const addVideoToDB = async () => {
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        videoInfo,
      }),
    };
    const response = await fetch('/api/loom', reqParams);
    const data = await response.json();

    console.log('the data is: ', data);
  };
  return (
    <div className={styles.guestsContainer}>
      <h3>Here go the guests page!</h3>
      <button id={BUTTON_ID}>RECORD WITH LOOM</button>
      <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
      {videoHTML && <h2>Add form for user to add his information!</h2>}
    </div>
  );
};

export default GuestsPage;
