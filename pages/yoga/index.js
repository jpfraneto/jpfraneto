import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allYogaLogs } from 'contentlayer/generated';
import YogaPage from '../../components/Yoga/YogaPage';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  const logs = allYogaLogs.sort((a, b) => {
    return a.index > b.index;
  });
  return { props: { logs } };
}

export default function YogaLogs({ logs }) {
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
      </PageLayout>
    </div>
  );
}
