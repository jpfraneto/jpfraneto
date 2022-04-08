import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageContext from '../../context/Language';
import styles from './Navbar.module.css';

const menuOptions = [
  { link: '/kishan', name: 'Kishan', id: 'kishan2133' },
  { link: '/notes', name: 'Notes', id: 'notes234' },
  { link: '/yoga', name: 'Yoga', id: 'yoga123' },
  { link: '/programming', name: 'Programming', id: 'programming123' },
  { link: '/education', name: 'Education', id: 'educastiro023' },
  { link: '/podcast', name: 'Podcast', id: 'podcast2135' },
  { link: '/sadhanas', name: 'Sadhana', id: 'sadhana2442' },
  { link: '/xilema', name: 'Xilema', id: 'asdkjdakblog' },
  { link: '/poetry', name: 'Poetry', id: 'asdasd' },
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
