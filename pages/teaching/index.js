import React, { Fragment } from 'react';
import styles from '../../styles/Kishan.module.css';
import { allKishanPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  return { props: { classes: JSON.parse(JSON.stringify(allKishanPages)) } };
}

const Teaching = ({ classes }) => {
  return (
    <PageLayout>
      <h1>Teaching</h1>
      <h2>This is me sharing what I know with the world.</h2>
      {!false && <p>I still don't know anything</p>}
    </PageLayout>
  );
};

export default Teaching;
