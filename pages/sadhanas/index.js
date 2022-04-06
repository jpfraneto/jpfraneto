import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { sadhanas } from '../../utils/sadhanas';
import SadhanaLifeContainer from '../../components/SadhanaLife/SadhanaLifeContainer';

export default function Sadhanas({ entries }) {
  return (
    <div>
      <Head>
        <title>Sadhana Entries</title>
      </Head>
      <SadhanaLifeContainer sadhanas={sadhanas} />
    </div>
  );
}
