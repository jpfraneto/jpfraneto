import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { connectToDatabase } from '../../lib/mongodb';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const sadhanas = await db.collection('sadhanas').find({}).toArray();
  return { props: { sadhanas: JSON.parse(JSON.stringify(sadhanas)) } };
}

export default function Sadhana({ sadhanas }) {
  return (
    <div>
      <Head>
        <title>· jp · sadhana</title>
      </Head>
      <PageLayout>
        <h1>Sadhana</h1>
        <hr />
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
