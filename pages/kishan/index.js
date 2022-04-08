import React, { Fragment } from 'react';
import styles from '../../styles/Kishan.module.css';
import { allKishanLogs } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  return { props: { classes: allKishanLogs } };
}

const Kishan = ({ classes }) => {
  return (
    <PageLayout>
      <h1>Kishan</h1>
      <h2>This is me teaching Kundalini Yoga</h2>
    </PageLayout>
  );
};

export default Kishan;
