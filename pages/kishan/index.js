import React, { Fragment } from 'react';
import styles from '../../styles/Kishan.module.css';
import { allKishanPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  console.log(allKishanPages);
  return { props: { classes: JSON.parse(JSON.stringify(allKishanPages)) } };
}

const Kishan = ({ classes }) => {
  return (
    <PageLayout>
      <h1>Kishan</h1>
      <h2>
        This is me teaching Kundalini Yoga. I will give my first class on the 22
        of April of 2022. Si quieres participar, escríbeme a @jpfraneto o al
        whatsapp{' '}
        <a
          style={{ color: 'white', textDecoration: 'none' }}
          href='https://wa.me/56985491126'
          target='_blank'
        >
          +56985491126
        </a>
      </h2>
    </PageLayout>
  );
};

export default Kishan;
