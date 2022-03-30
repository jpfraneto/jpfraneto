import React from 'react';

const Sandbox = () => {
  const fetchDb = async () => {
    const response = await fetch('/api/sadhanas/sandbox');
  };
  return (
    <div>
      <button onClick={fetchDb}>Fetch DB and make the magic happen</button>
    </div>
  );
};

export default Sandbox;
