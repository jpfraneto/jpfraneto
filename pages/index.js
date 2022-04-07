import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home2.module.css';
import Image from 'next/image';
import LanguageContext from '../context/Language';

export default function Home() {
  const value = useContext(LanguageContext);

  const welcomes = ['Bienvenid@', 'Welcome', 'Bounjour'];
  const [welcomeText, setWelcomeText] = useState(welcomes[0]);
  useEffect(() => {
    setInterval(() => {
      setWelcomeText(welcomes[Math.floor(Math.random() * welcomes.length)]);
    }, 2000);
  }, []);
  // const activeBtn = {
  //   'box-shadow': '0 0 5px 5px black',
  // };
  // const changeLanguage = newLanguage => {
  //   value.setLanguageSelected(newLanguage);
  // };
  return (
    <div className={styles.main}>
      <Head>
        <title>· jp ·</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        <div className={styles.presentationContainer}>
          <div className={styles.albumOfTheDayContainer}>
            <div className={styles.albumInformation}>
              <h2>I learn by teaching, I think by writing.</h2>
              <h3>Yoga</h3>
              <h3>Programming</h3>
              <h3>Podcast</h3>
              <h3>Writing</h3>
              <h3>Woodworking</h3>
            </div>
          </div>
        </div>

        <div className={styles.bottomNavbar}>
          <p>From South America, with ♡</p>
        </div>
      </>
    </div>
  );
}
