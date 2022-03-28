import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allProgrammingLogs } from 'contentlayer/generated';
import ProgrammingLogsPage from '../../components/Programming/ProgrammingLogsPage';
import { connectToDatabase } from '../../lib/mongodb2';

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const data = await db.collection('dailies').find({}).toArray();

  return { props: { dailies: [...data] } };
}

export default function Home({ dailies }) {
  return (
    <div>
      <Head>
        <title>PROGRAMMING LOGS!</title>
      </Head>
      {dailies.map(daily => (
        <p>{daily.date}</p>
      ))}
    </div>
  );
}
