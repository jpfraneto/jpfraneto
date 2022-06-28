import React, { useState, useEffect } from 'react';

import { setup, isSupported } from '@loomhq/record-sdk';
import { oembed } from '@loomhq/loom-embed';

const BUTTON_ID = 'loom-record-sdk-button';

export default function Sandbox() {
  const [videoHTML, setVideoHTML] = useState('');

  useEffect(() => {
    async function setupLoom() {
      const { supported, error } = await isSupported();

      if (!supported) {
        return;
      }

      const button = document.getElementById(BUTTON_ID);

      if (!button) {
        return;
      }

      const { configureButton } = await setup({
        publicAppId: PUBLIC_APP_ID,
      });

      const sdkButton = configureButton({ element: button });

      sdkButton.on('insert-click', async video => {
        const { html } = await oembed(video.sharedUrl, { width: 400 });
        setVideoHTML(html);
      });
    }

    setupLoom();
  }, []);

  return (
    <>
      <button id={BUTTON_ID}>Record</button>
      <div dangerouslySetInnerHTML={{ __html: videoHTML }}></div>
    </>
  );
}
