import React, { useState } from 'react';
import styles from './poetry.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import Link from 'next/link';
import { allPoems } from 'contentlayer/generated';
import ElementsList from '../../components/Layout/ElementsList';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import PoetryLayout from '../../components/Poetry/PoetryLayout';

export async function getStaticProps({ params }) {
  allPoems.sort((x, y) => (x.index < y.index ? 1 : -1));
  return { props: { poems: allPoems } };
}

const Poetry = ({ poems }) => {
  return (
    <>
      <Head>
        <title>· jp · poetry</title>
      </Head>
      <PageLayout>
        <h1>Poetry</h1>
        <h2>
          I share the poetry that I write in my instagram page:{' '}
          <a
            style={{ color: 'green' }}
            href='https://www.instagram.com/jpfraneto/'
            target='_blank'
          >
            @jpfraneto
          </a>
        </h2>
        <PoetryLayout poems={poems} />
      </PageLayout>
    </>
  );
};

export default Poetry;
