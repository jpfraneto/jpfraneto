import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home2.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>· jp ·</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <div className={styles.presentationContainer}>
          <h3>My name is jp, and I'm in a quest.</h3>
          <p>To reimagine how we interact with the web.</p>
          <p>
            To be one of the spiders that build the future of how we communicate
            with each other.
          </p>
          <p>From a place of vulnerability, of openness, of trust. </p>
          <p>I feel very comfortable with the unknown. </p>
          <p>Doing things in a new way. </p>
          <p>
            This website is an exploration into my ideas, into my capacities,
            into what I believe.
          </p>
          <p>It is my window to the world.</p>
          <p>It is where I show you my world.</p>
          <p>To inspire.</p>
          <p>To connect.</p>
          <p>To experience awe.</p>
          <p>To delve into who we are as a collective.</p>
          <h3>Welcome.</h3>
          <h4>I'm glad you are here.</h4>
          <div className={styles.enterBtnContainer}>
            <Link href='/menu'>
              <a className={styles.enterBtn}>Enter</a>
            </Link>
          </div>
        </div>
        <div class='wrapper'>
          <svg
            class='triangle-canvas'
            viewBox='0 0 1000 1000'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              class='triangle triangle-1'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-2'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-3'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-4'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-5'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-6'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-7'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-8'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-9'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-10'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-11'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-12'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-13'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-14'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-15'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-16'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-17'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-18'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-19'
              points='500,200 759,650 241,650'
            />
            <polygon
              class='triangle triangle-20'
              points='500,200 759,650 241,650'
            />
          </svg>
        </div>
        <div className={styles.bottomNavbar}>
          <p>From South America, with ♡</p>
        </div>
      </div>
    </div>
  );
}
