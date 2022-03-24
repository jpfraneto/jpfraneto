import React, { useContext } from 'react';
import Link from 'next/link';
import LanguageContext from '../../pages/context/Language';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <Link href='/'>
        <a>Jorge Pablo Franetovic Stocker</a>
      </Link>
      <Link href='/sayhi'>
        <a className={styles.sayHiBtn}>Say Hello!</a>
      </Link>
    </nav>
  );
};

export default Navbar;
