import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allProgrammingLogs } from 'contentlayer/generated';
import ProgrammingLogsPage from '../../components/Programming/ProgrammingLogsPage';

export async function getStaticProps() {
  const logs = allProgrammingLogs.sort((a, b) => {
    return a.index > b.index ? 1 : -1;
  });
  return { props: { logs } };
}

export default function Home({ logs }) {
  return (
    <div>
      <Head>
        <title>PROGRAMMING LOGS!</title>
      </Head>
      <ProgrammingLogsPage logs={logs} />
    </div>
  );
}
