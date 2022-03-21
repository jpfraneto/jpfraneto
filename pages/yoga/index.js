import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allYogaLogs } from 'contentlayer/generated';

export async function getStaticProps() {
  const logs = allYogaLogs.sort((a, b) => {
    return a.index > b.index;
  });
  return { props: { logs } };
}

function YogaLogCard(log) {
  return (
    <div>
      <p>
        {log.date} {log.index}
      </p>
      <h2>
        <Link href={log.url}>
          <a>{log.title}</a>
        </Link>
      </h2>
    </div>
  );
}

export default function YogaLogs({ logs }) {
  return (
    <div>
      <Head>
        <title>YOGA LOGS!</title>
      </Head>

      <h1>Here go the yoga logs</h1>

      {logs.map((log, idx) => (
        <YogaLogCard key={idx} {...log} />
      ))}
      <Link href='/menu'>
        <a>Back to menu</a>
      </Link>
    </div>
  );
}
