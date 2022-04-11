import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import YogaPage from '../../components/Yoga/YogaPage';
import PageLayout from '../../components/Layout/PageLayout';
import ElementsList from '../../components/Layout/ElementsList';
import { connectToDatabase3 } from '../../lib/mongodb3';

export async function getStaticProps() {
  const { db3 } = await connectToDatabase3();
  const yogaLogs = await db3.collection('yoga').find({}).toArray();
  return { props: { yogaLogs: JSON.parse(JSON.stringify(yogaLogs)) } };
}

export default function YogaLogs({ yogaLogs }) {
  return (
    <div>
      <Head>
        <title>Yoga</title>
      </Head>
      <PageLayout>
        <h1>Yoga</h1>
        <h2>
          This ancient technology is the means by which I connect to my atman,
          to my spiritual essence, and it is the path that I travel so that I
          can achieve the biggest goal in my life: be able to live in full
          presence.
        </h2>
        <ElementsList>
          {yogaLogs.map(log => (
            <Link href={`/yoga/${log._id}`}>
              <a>{log.date}</a>
            </Link>
          ))}
        </ElementsList>
      </PageLayout>
    </div>
  );
}
