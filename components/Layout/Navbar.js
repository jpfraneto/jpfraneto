import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageContext from '../../context/Language';
import styles from './Navbar.module.css';

const menuOptions = [
  { link: '/yoga', name: 'Yoga', id: 'yoga123' },
  { link: '/programming', name: 'Programming', id: 'programming123' },
  { link: '/woodwork', name: 'Woodwork', id: 'woodwork123' },
  { link: '/talking', name: 'Talking', id: 'talking123' },
  { link: '/thoughts', name: 'Thoughts', id: 'thoughts123' },
  { link: '/music', name: 'Music', id: 'music123' },
  { link: '/bookshelf', name: 'Bookshelf', id: 'bookshelf2135' },
];

const Navbar = () => {
  const value = useContext(LanguageContext);
  return (
    <nav className={styles.navMainContainer}>
      <div className={styles.navContainer}>
        <Link className={styles.nameLink} href='/'>
          <a>Jorge Pablo Franetovic Stocker</a>
        </Link>
        <Link href='/feedback'>
          <a className={styles.feedbackBtn}>Feedback</a>
        </Link>
      </div>
      <nav className={styles.actualNavbar}>
        <ul>
          {menuOptions.map(item => (
            <Link key={item.id} href={item.link}>
              <li className={styles.navbarItemBtn}>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
