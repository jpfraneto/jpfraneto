import React from 'react';

const LoomPlayer = ({ url }) => {
  if (!url) return <></>;
  if (!url.includes('loom')) return <></>;
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '62.5%',
        height: 'auto',
        width: '100%',
      }}
    >
      <iframe
        src={url.replace('share', 'embed')}
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
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
  );
};

export default LoomPlayer;
