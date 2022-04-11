import React from 'react';
import styles from './styles.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import { allProgrammingLogs } from 'contentlayer/generated';
import Link from 'next/link';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  const logs = allProgrammingLogs.sort((a, b) => {
    return a.index > b.index ? -1 : 1;
  });

  return { props: { logs } };
}

const Programming = ({ logs }) => {
  return (
    <PageLayout>
      <h1>Programming</h1>
      <h2>
        As the Covid-19 pandemic started, I realized that I wanted to learn how
        to code so that I could be useful for the whole world, building into a
        reality the ideas that I had in my mind. This is where I will share what
        I have learned.
      </h2>
      <ElementsList>
        <p>The Open Source Factory</p>
      </ElementsList>
    </PageLayout>
  );
};

export default Programming;
