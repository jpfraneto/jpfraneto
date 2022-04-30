import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Draft.module.css';
import { allDrafts } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticProps() {
  return { props: { drafts: allDrafts } };
}

const IndividualDraft = ({ children }) => {
  const [published, setPublished] = useState(null);
  const [loading, setLoading] = useState(false);
  const Component = useMDXComponent(children.body.code);
  const publishElement = async draft => {
    setLoading(true);
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
    setLoading(false);
    setPublished(data);
  };
  return (
    <div className={styles.draftContainer}>
      {published ? (
        <div>
          <button onClick={() => console.log(children)}>Print Draft</button>
          <p>{published.message} with the following id:</p>
          <p>{published.id}</p>
        </div>
      ) : (
        <>
          {loading ? (
            <h2>Loading!</h2>
          ) : (
            <>
              {' '}
              {Object.keys(children).map((key, index) => {
                if (key === 'body' || key === '_raw') return;
                return (
                  <p>
                    <strong>
                      {key}: {children[key]}
                    </strong>
                  </p>
                );
              })}
              <Component components={{ ...components }} />
              <button onClick={() => publishElement(children)}>Publicar</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default function Draft({ drafts }) {
  return (
    <div>
      <Head>
        <title>Draft</title>
      </Head>
      <PageLayout>
        {drafts.map(draft => {
          return <IndividualDraft>{draft}</IndividualDraft>;
        })}
      </PageLayout>
    </div>
  );
}
