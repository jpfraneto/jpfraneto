import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allProgrammingLogs } from 'contentlayer/generated';

export async function getStaticProps() {
  const logs = allProgrammingLogs.sort((a, b) => {
    return a.index > b.index;
  });
  return { props: { logs } };
}

function ProgrammingLogCard(log) {
  return (
    <div>
      <p>
        {log.date} {log.index} {log.url}
      </p>
      <h2>
        <Link href={log.url}>
          <a>{log.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ logs }) {
  return (
    <div>
      <Head>
        <title>PROGRAMMING LOGS!</title>
      </Head>

      <h1>Here go the programming logs</h1>

      {logs.map((log, idx) => (
        <ProgrammingLogCard key={idx} {...log} />
      ))}
    </div>
  );
}
