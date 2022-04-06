import React from 'react';
import { allSadhanaLogs } from 'contentlayer/generated';
import { sadhanas } from '../../../utils/sadhanas';
import Link from 'next/link';
import SadhanaLifeContainer from '../../../components/SadhanaLife/SadhanaLifeContainer';
import styles from '../../../styles/Sadhana.module.css';

export async function getStaticPaths() {
  const paths = sadhanas.map(sadhana => {
    return { params: { slug: sadhana.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const logs = allSadhanaLogs.filter(sadhana => {
    return sadhana.sadhanaslug === params.slug;
  });
  return { props: { logs } };
}

export default function Sadhana({ logs }) {
  return (
    <section className={styles.sadhanaContainer}>
      {logs.map(x => (
        <Link href={`/sadhanas/${x.sadhanaslug}/${x.id}`}>
          <a>{x.date}</a>
        </Link>
      ))}
      <Link href='/sadhanas'>
        <a>Go back</a>
      </Link>
    </section>
  );
}
