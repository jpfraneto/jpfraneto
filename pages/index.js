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
              <h2>Hello, my name is jp.</h2>
              <hr />
              <h3>
                I learn by{' '}
                <Link href='/kishan'>
                  <a>teaching</a>
                </Link>
                , I think by{' '}
                <Link href='/notes'>
                  <a>writing</a>
                </Link>
                .
              </h3>
              <h3>
                I evolve by practicing{' '}
                <Link href='/yoga'>
                  <a>yoga</a>
                </Link>
                .
              </h3>
              <h3>
                I build what I want to bring into the world with{' '}
                <Link href='/programming'>
                  <a>code</a>
                </Link>
                .
              </h3>
              <h3>
                I
                <Link href='/education'>
                  <a> educate </a>
                </Link>
                myself with what feels better at the time.
              </h3>
              <h3>
                I become more human by{' '}
                <Link href='/podcast'>
                  <a>talking</a>
                </Link>{' '}
                with random people from all over the world.
              </h3>
              <h3>
                I live by the belief that{' '}
                <Link href='/sadhanas'>
                  <a>consistency and perseverance</a>
                </Link>{' '}
                is what drives success.
              </h3>
              <h3>
                I practice patience{' '}
                <Link href='/xilema'>
                  <a>woodworking and drawing</a>
                </Link>
                .
              </h3>
              <h3>
                I feel by writing{' '}
                <Link href='/poetry'>
                  <a>poems</a>
                </Link>
                .
              </h3>
              <p>
                Welcome to my corner on the internet, where I discover who I am,
                day by day.
              </p>
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
