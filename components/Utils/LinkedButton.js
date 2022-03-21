import React from 'react';
import styles from './LinkedButton.module.css';
import Link from 'next/link';

const LinkedButton = ({ link, text }) => {
  return (
    <div className={styles.btnContainer}>
      <Link href={link}>
        <a className={styles.btn}>{text}</a>
      </Link>
    </div>
  );
};

export default LinkedButton;
