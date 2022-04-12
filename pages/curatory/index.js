import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import YogaPage from '../../components/Yoga/YogaPage';
import { allCuratoryPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  return { props: { curatoryLogs: allCuratoryPages } };
}

export default function Curatory({ curatoryLogs }) {
  const Component = useMDXComponent(curatoryLogs[0].body.code);
  return (
    <div>
      <Head>
        <title>Yoga</title>
      </Head>
      <PageLayout>
        <h1>Curatory</h1>
        <h2>
          This is where I write so that I can integrate the content that I
          consume. I try to filter it before, so I hope that there is value for
          you in this list of pieces that I have selected to consume.
        </h2>
        <ElementsList>
          <Component components={{ ...components }} />
        </ElementsList>
      </PageLayout>
    </div>
  );
}
