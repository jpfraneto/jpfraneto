import React, { useState } from 'react';
import styles from './poetry.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import Link from 'next/link';
import { allPoems } from 'contentlayer/generated';
import ElementsList from '../../components/Layout/ElementsList';
import { MDXProvider } from '@mdx-js/react';

export async function getStaticProps({ params }) {
  return { props: { poems: allPoems } };
}

const Poetry = ({ poems }) => {
  console.log('the poems are: ', poems);
  const [displayPoem, setDisplayPoem] = useState(null);
  return (
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
    </PageLayout>
  );
};

export default Poetry;
