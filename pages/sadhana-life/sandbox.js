import React from 'react';
import { allProgrammingLogs } from 'contentlayer/generated';

const Sandbox = () => {
  // const fetchDb = async () => {
  //   const response = await fetch('/api/sadhanas/sandbox');
  //   const data = await response.json();
  //   console.log('the response is: ', data);
  // };
  const fetchDb = async () => {
    const elements = allProgrammingLogs.map(el => ({
      title: el.title,
      date: el.date,
      index: el.index,
      description: el.description,
      loomRecording: el.loomRecording,
      music: el.music,
      building: el.building,
      sessionDuration: el.sessionDuration,
      _id: el._id,
    }));
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        elements,
      }),
    };
    const response = await fetch('/api/sadhanas/sandbox', reqParams);
  };
  return (
    <div>
      <button onClick={fetchDb}>Fetch DB and make the magic happen</button>
    </div>
  );
};

export default Sandbox;
