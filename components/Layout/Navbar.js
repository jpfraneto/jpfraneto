import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageContext from '../../context/Language';
import styles from './Navbar.module.css';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';

const menuOptions = [
  { link: '/teaching', name: 'Teaching', id: 'kishan2133' },
  { link: '/thoughts', name: 'Thoughts', id: 'curatory230' },
  { link: '/programming', name: 'Programming', id: 'programming123' },
  { link: '/education', name: 'Education', id: 'educastiro023' },
  { link: '/podcast', name: 'Podcast', id: 'podcast2135' },
  { link: '/sadhana', name: 'Sadhana', id: 'sadhana2442' },
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
        <div className={styles.contactElementsDiv}>
          <a target='_blank' href='https://wa.link/h20gg2'>
            <AiOutlineWhatsApp />
          </a>
          <a target='_blank' href='mailto:jpfraneto@gmail.com'>
            <AiOutlineMail />
          </a>
        </div>
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
