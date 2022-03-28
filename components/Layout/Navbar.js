import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageContext from '../../pages/context/Language';
import styles from './Navbar.module.css';

const Navbar = () => {
  const value = useContext(LanguageContext);
  const [helloMessage, setHelloMessage] = useState('Say Hello!');
  useEffect(() => {
    if (value.state.languageSelected === 'en') {
      setHelloMessage('Say Hello!');
    }
    if (value.state.languageSelected === 'ta') {
      setHelloMessage('வணக்கம்');
    }
    if (value.state.languageSelected === 'es') {
      setHelloMessage('Mandate un saludo');
    }
  }, [value.state.languageSelected]);
  return (
    <nav className={styles.navContainer}>
      <Link className={styles.nameLink} href='/'>
        <a>Jorge Pablo Franetovic Stocker</a>
      </Link>
      <Link href='/sayhi'>
        <a className={styles.sayHiBtn}>{helloMessage}</a>
      </Link>
    </nav>
  );
};

export default Navbar;
