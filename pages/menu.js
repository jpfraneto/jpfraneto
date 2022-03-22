import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import MenuOptionCard from '../components/Menu/MenuOptionCard';

const menuOptions = [
  { link: '/yoga', name: 'Yoga', id: 'yoga123' },
  { link: '/programming', name: 'Programming', id: 'programming123' },
  { link: '/history', name: 'History', id: 'history123' },
  { link: '/woodwork', name: 'Woodwork', id: 'woodwork123' },
  { link: '/talking', name: 'Talking', id: 'talking123' },
  { link: '/thoughts', name: 'Thoughts', id: 'thoughts123' },
  { link: '/music', name: 'Music', id: 'music123' },
];

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksList}>
        <ul>
          {menuOptions.map(item => (
            <li key={item.id}>
              <MenuOptionCard link={item.link} name={item.name} />
            </li>
          ))}
        </ul>
      </div>
      <Link href='/'>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default Menu;
