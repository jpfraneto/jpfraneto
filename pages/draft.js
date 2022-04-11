import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { allDrafts } from 'contentlayer/generated';
import PageLayout from '../components/Layout/PageLayout';
import components from '../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticProps() {
  return { props: { drafts: allDrafts } };
}

export default function Draft({ drafts }) {
  const draft = drafts[0];
  const Component = useMDXComponent(draft.body.code);
  const publishElement = async () => {
    const publishable = { ...draft };
    delete publishable['_id'];
    delete publishable['_raw'];
    delete publishable['type'];
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        publishable,
      }),
    };
    const response = await fetch('/api/draft', reqParams);
    const data = await response.json();
  };
  return (
    <div>
      <Head>
        <title>Draft</title>
      </Head>
      <PageLayout>
        <p>Wena</p>
        {Object.keys(draft).map((key, index) => {
          if (key === 'body' || key === '_raw') return;
          return (
            <p>
              <strong>
                {key}: {draft[key]}
              </strong>
            </p>
          );
        })}
        <Component components={{ ...components }} />
        <button onClick={publishElement}>Publicar</button>
      </PageLayout>
    </div>
  );
}
