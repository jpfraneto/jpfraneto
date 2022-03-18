import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
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
          <div className={styles.iframeContainer}>
            <iframe
              src='https://www.loom.com/embed/93e6345a1f01476496641a8815d07074'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2>Last Post</h2>
          </div>
        </div>
        <div className={`${styles.homeRightContainer} ${styles.homeContainer}`}>
          <h2>High Tech</h2>
          <p>Programming</p>
          <div className={styles.iframeContainer}>
            <iframe
              src='https://www.loom.com/embed/3cb76588f5d04af08b17f5d4b6cf956c'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2>Last Post</h2>
          </div>
        </div>
        <div className={styles.thirdEyeContainer}>
          <div className={styles.thirdEyes}>
            <div className={styles.outerThirdEye}></div>
            <div className={styles.thirdEye}></div>
          </div>
        </div>
        <div className={styles.eternalTechContainer}>
          <h2>Eternal Tech</h2>
          <p>Music</p>
          <div className={styles.albumContainer}>
            <Image
              src={
                'https://i.discogs.com/e6mcEn-AqaBad_8c810-giP1wK4QrDa17V8M8PX_fHA/rs:fit/g:sm/q:90/h:169/w:171/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyNTY3/LTAwMS5qcGc.jpeg'
              }
              width={200}
              height={200}
              alt='Album of the day image'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
