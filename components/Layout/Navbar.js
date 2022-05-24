import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageContext from '../../context/Language';
import styles from './Navbar.module.css';
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineGithub,
} from 'react-icons/ai';

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
  const handleEmailBtn = e => {
    e.preventDefault();
    const res = confirm('Do you want to send me an email?');
    if (res) window.open('mailto:jpfraneto@gmail.com', '_blank');
  };
  return (
    <nav className={styles.navMainContainer}>
      <div className={styles.navContainer}>
        <Link className={styles.nameLink} href='/'>
          <a>Jorge Pablo Franetovic Stocker</a>
        </Link>
        <div className={styles.contactElementsDiv}>
          <a
            target='_blank'
            href='https://twitter.com/jpfraneto'
            rel='noreferrer'
          >
            <AiOutlineTwitter />
          </a>
          <a
            target='_blank'
            href='https://github.com/jpfraneto'
            rel='noreferrer'
          >
            <AiOutlineGithub />
          </a>
          <a target='_blank' href='https://wa.link/h20gg2' rel='noreferrer'>
            <AiOutlineWhatsApp />
          </a>
          <a onClick={handleEmailBtn}>
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
