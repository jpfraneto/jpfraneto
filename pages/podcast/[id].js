import React from 'react';
import components from '../../components/MDXcomponents';
import PodcastLayout from 'layouts/podcast';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const allPodcastLogs = await db.collection('podcast').find({}).toArray();
  const paths = allPodcastLogs.map(log => {
    return { params: { id: log._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const thisPodcastLog = await db
    .collection('podcast')
    .findOne({ _id: new ObjectId(params.id) });
  return { props: { log: JSON.parse(JSON.stringify(thisPodcastLog)) } };
}

export default function Podcast({ log }) {
  const Component = useMDXComponent(log.body.code);
  return (
    <PodcastLayout content={log}>
      <Component components={{ ...components }} />
    </PodcastLayout>
  );
}
