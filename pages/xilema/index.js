import React from 'react';
import Head from 'next/head';
import styles from './Xilema.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import { allXilemaPages } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  console.log(allXilemaPages);
  return { props: { arts: allXilemaPages } };
}

const Xilema = ({ arts }) => {
  return (
    <>
      <Head>
        <title>· jp · xilema</title>
      </Head>
      <PageLayout>
        <h1>Xilema</h1>
        <h2>
          This is all the art that I have created with wood and a compass and
          pencils.
        </h2>
        <div className={styles.xilemaWorksDisplay}>
          {/* {arts.map(work => {
            return (
              <Link href={`/xilema/${work.slug}`}>
                <div className={styles.imageWrapper}>
                  <Image src={work.image} width='222px' height='222px' />
                </div>
              </Link>
            );
          })} */}
          {arts.map((art, index) => {
            return (
              <div key={index}>
                {art.imageUrl && (
                  <Image src={art.imageUrl} width='200' height='200' />
                )}
              </div>
            );
          })}
        </div>
      </PageLayout>
    </>
  );
};

export default Xilema;
