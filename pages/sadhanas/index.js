import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { sadhanas } from '../../data/sadhanas/sadhanas';
import SadhanaLifeContainer from '../../components/SadhanaLife/SadhanaLifeContainer';
import PageLayout from '../../components/Layout/PageLayout';

export default function Sadhanas({ entries }) {
  return (
    <div>
      <Head>
        <title>Sadhana Entries</title>
      </Head>
      {/* <SadhanaLifeContainer sadhanas={sadhanas} /> */}
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
