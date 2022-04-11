import React from 'react';
import components from '../../components/MDXcomponents';
import YogaLayout from 'layouts/yoga';
import { connectToDatabase3 } from '../../lib/mongodb3';
import { ObjectId } from 'mongodb';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const { db3 } = await connectToDatabase3();
  const allYogaLogs = await db3.collection('yoga').find({}).toArray();
  const paths = allYogaLogs.map(log => {
    console.log('the log is: ', log);
    return { params: { id: log._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db3 } = await connectToDatabase3();
  const thisYogaLog = await db3
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
