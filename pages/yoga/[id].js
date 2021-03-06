import React from 'react';
import components from '../../components/MDXcomponents';
import YogaLayout from 'layouts/yoga';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const allYogaLogs = await db.collection('yoga').find({}).toArray();
  const paths = allYogaLogs.map(log => {
    return { params: { id: log._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const thisYogaLog = await db
    .collection('yoga')
    .findOne({ _id: new ObjectId(params.id) });
  return { props: { log: JSON.parse(JSON.stringify(thisYogaLog)) } };
}

export default function Yoga({ log }) {
  const Component = useMDXComponent(log.body.code);
  return (
    <YogaLayout content={log}>
      <Component components={{ ...components }} />
    </YogaLayout>
  );
}
