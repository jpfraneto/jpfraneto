import React from 'react';
import { connectToDatabase } from '../../lib/mongodb';
import EpisodeCard from '../../components/Podcast/EpisodeCard';

export async function getStaticProps({}) {
  const { db } = await connectToDatabase();
  const presentEpisode = await db
    .collection('podcast')
    .findOne({ status: 'present' });
  console.log('the present episode is: ', presentEpisode);
  return { props: { episode: JSON.parse(JSON.stringify(presentEpisode)) } };
}

export default function PodcastEvolution({ episode }) {
  const updatePresentEpisode = async () => {
    const response = await fetch('/api/podcast/evolve');
    console.log('the response is: ', response);
  };
  const renewDb = async () => {
    const response = await fetch('/api/podcast/renewdb');
    console.log('the response is: ', response);
  };
  return (
    <div>
      <h2>The present episode is:</h2>
      <h3>{episode.album}</h3>
      <button onClick={updatePresentEpisode}>
        Bring the next one to the present!
      </button>
      <button onClick={renewDb}>Renew the db</button>
    </div>
  );
}
