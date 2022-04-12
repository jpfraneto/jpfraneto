import React from 'react';
import components from '../../components/MDXcomponents';
import CuratoryLayout from 'layouts/curatory';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const allCuratoryLogs = await db.collection('curatory').find({}).toArray();
  const paths = allCuratoryLogs.map(log => {
    return { params: { id: log._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const thisCuratoryLog = await db
    .collection('curatory')
    .findOne({ _id: new ObjectId(params.id) });
  return { props: { log: JSON.parse(JSON.stringify(thisCuratoryLog)) } };
}

export default function CuratoryLog({ log }) {
  const Component = useMDXComponent(log.body.code);
  return (
    <CuratoryLayout content={log}>
      <Component components={{ ...components }} />
    </CuratoryLayout>
  );
}
