import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import YogaPage from '../../components/Yoga/YogaPage';
import { allYogaPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  return { props: { yogaLogs: allYogaPages } };
}

export default function YogaLogs({ yogaLogs }) {
  const Component = useMDXComponent(yogaLogs[0].body.code);
  return (
    <div>
      <Head>
        <title>· jp · yoga</title>
      </Head>
      <PageLayout>
        <h1>Yoga</h1>
        <h2>
          This ancient technology is the means by which I connect to my atman,
          to my spiritual essence, and it is the path that I travel so that I
          can achieve the biggest goal in my life: be able to live in the
          present.
        </h2>
        <ElementsList>
          <Component components={{ ...components }} />
        </ElementsList>
      </PageLayout>
    </div>
  );
}
