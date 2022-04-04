import React from 'react';
import PodcastPage from '../../components/Podcast/PodcastPage';
import { connectToDatabase } from '../../lib/mongodb';

const Podcast = ({ episodes }) => {
  return <PodcastPage episodes={episodes} />;
};

export default Podcast;

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const episodes = await db.collection('podcast').find({}).toArray();

  return {
    props: {
      episodes: JSON.parse(JSON.stringify(episodes)),
    },
  };
}
