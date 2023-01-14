import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home2.module.css';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
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
                <Link href='/teaching'>
                  <a>teaching</a>
                </Link>
                , I think by{' '}
                <a target='_blank' href='https://jpfraneto.substack.com'>
                  writing
                </a>
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
                I become more human by{' '}
                <a
                  target='_blank'
                  href='https://podcasts.apple.com/cl/podcast/learning-to-live/id1654771287'
                >
                  talking
                </a>{' '}
                with random people from all over the world.
              </h3>
              <h3>
                I live by the belief that{' '}
                <Link href='/sadhana'>
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
                <a
                  target='_blank'
                  href='https://www.instagram.com/poesiadeldespertar'
                >
                  poems
                </a>
                .
              </h3>
              <p>Welcome to my corner on the internet.</p>
              <p>
                ***I haven't updated this website for a while. You can stay
                updated with what I'm doing on{' '}
                <a target='_blank' href='https://www.twitter.com/kithkui'>
                  twitter
                </a>
                , or just go into the app that I'm building and use it. Any
                feedback is gold for me. It's here:{' '}
                <a target='_blank' href='https://www.zadhana.xyz'>
                  www.zadhana.xyz
                </a>{' '}
                ***
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomNavbar}>
          <p>From South America, with ♡</p>
        </div>
        <div className={styles.mobileBottomNavbar}>
          Get in Touch
          <span className={styles.bottomNavIcon}>
            <a target='_blank' href='https://wa.link/h20gg2'>
              <AiOutlineWhatsApp />
            </a>
            <a target='_blank' href='mailto:jpfraneto@gmail.com'>
              <AiOutlineMail />
            </a>
          </span>
        </div>
      </>
    </div>
  );
}
