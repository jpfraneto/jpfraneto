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
            <Image
              src='https://i.discogs.com/l5aSrn6nEIVC-FOdV5WcZmmrFIMjHGxkwS_QyoCG6mU/rs:fit/g:sm/q:90/h:538/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxMDg3/Ni0xNDc3Nzc3ODM4/LTE4OTQuanBlZw.jpeg'
              width='200'
              height='200'
            />
            <div className={styles.albumInformation}>
              <h1>Album of the Day:</h1>
              <h2>Beyond the Missouri Sky</h2>
              <h4>Pat Metheny & Charlie Haden</h4>
              <h4>1998</h4>
              <a href='https://www.spotify.com' target='_blank'>
                Listen
              </a>
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
