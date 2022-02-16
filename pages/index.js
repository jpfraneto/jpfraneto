import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>· jp ·</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
