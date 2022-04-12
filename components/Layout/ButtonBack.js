import React from 'react';
import styles from './ButtonBack.module.css';
import Link from 'next/link';

const ButtonBack = ({ msg = 'Back', linkReference = '/' }) => {
  return (
    <div className={styles.btnContainer}>
      <Link href={linkReference}>
        <a className={styles.backBtn}>{msg}</a>
      </Link>
    </div>
  );
};

export default ButtonBack;
