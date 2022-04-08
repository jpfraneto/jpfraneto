import React from 'react';
import styles from './Xilema.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import { works } from '../../data/xilema/works';
import Link from 'next/link';
import Image from 'next/image';

const Xilema = () => {
  return (
    <PageLayout>
      <h1>Xilema</h1>
      <h2>
        This is all the art that I have created with wood and a compass and
        pencils.
      </h2>
      <div className={styles.xilemaWorksDisplay}>
        {works.map(work => {
          return (
            <Link href={`/xilema/${work.slug}`}>
              <Image src={work.image} width='222px' height='222px' />
            </Link>
          );
        })}
      </div>
    </PageLayout>
  );
};

export default Xilema;
