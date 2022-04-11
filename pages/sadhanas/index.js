import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { connectToDatabase3 } from '../../lib/mongodb3';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  const { db3 } = await connectToDatabase3();
  const sadhanas = await db3.collection('sadhanas').find({}).toArray();
  return { props: { sadhanas: JSON.parse(JSON.stringify(sadhanas)) } };
}

export default function Sadhanas({ sadhanas }) {
  console.log('building', sadhanas);
  return (
    <div>
      <Head>
        <title>Sadhana Entries</title>
      </Head>
      <PageLayout>
        <h1>Sadhanas</h1>
        <h2>
          I commit to do something and try my best to stick with it, so that the
          repetition can teach me what I need to learn in order to evolve. Doing
          the work when you dont want to is the best predictor of long term
          results.
        </h2>
      </PageLayout>
    </div>
  );
}
