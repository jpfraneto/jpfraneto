import React from 'react';
import styles from '../styles/NewLanding.module.css';
import Image from 'next/image';
import jpImage from '../public/images/jp.png';

const Landing = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.presentationContainer}></div>
      <div className={styles.imageContainer}>
        <Image
          src='/jp.jpg'
          alt='Jorge Pablo Franetovic Stocker'
          width='333px'
          height='666px'
        />
      </div>
    </div>
  );
};

export default Landing;
