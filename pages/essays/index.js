import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allEssayLogs } from 'contentlayer/generated';

export async function getStaticProps() {
  console.log('a', allEssayLogs);
  return { props: { logs: allEssayLogs } };
}

export default function EssayLogs({ logs }) {
  console.log('the logs are: ', logs);
  return (
    <div>
      <Head>
        <title>Essay LOGS!</title>
      </Head>
      <div>
        {logs.map(log => (
          <Link href={`/essays/${log.slug}`}>
            <a>Go</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
