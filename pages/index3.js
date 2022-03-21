import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const activeClass = showList ? styles.activeThirdEye : '';
  return (
    <div>
      <Head>
        <title>· jp ·</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <div className={`${styles.homeLeftContainer} ${styles.homeContainer}`}>
          <h2>Ancient Tech</h2>
          <p>Yoga</p>
        </div>
        <div className={`${styles.homeRightContainer} ${styles.homeContainer}`}>
          <h2>High Tech</h2>
          <p>Programming</p>
        </div>
        <div className={`${styles.thirdEyeContainer}`}>
          <div className={styles.thirdEyes}>
            <div
              className={`${styles.thirdEye} ${activeClass}`}
              onClick={() => {
                setShowList(x => !x);
              }}
            ></div>
          </div>
        </div>
        {showList && (
          <div className={styles.linksList}>
            <ul>
              <li>
                <Link href='/yoga'>
                  <a>Yoga</a>
                </Link>
              </li>
              <li>
                <Link href='/programming'>
                  <a>Programming</a>
                </Link>
              </li>
              <li>
                <Link href='/history'>
                  <a>History</a>
                </Link>
              </li>
              <li>
                <Link href='/woodwork'>
                  <a>Woodwork</a>
                </Link>
              </li>
              <li>
                <Link href='/talking'>
                  <a>Talking</a>
                </Link>
              </li>
              <li>
                <Link href='/thoughts'>
                  <a>Thoughts</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
