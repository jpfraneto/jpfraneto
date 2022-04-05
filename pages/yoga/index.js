import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allYogaLogs } from 'contentlayer/generated';
import YogaPage from '../../components/Yoga/YogaPage';

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
        <title>YOGA LOGS!</title>
      </Head>
      {logs.map(log => (
        <div>
          <p>
            Clase de {log.yogatype} con {log.teacher}
          </p>
          <Link href={`/yoga/${log.date}`}>
            <a>{log.date}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
