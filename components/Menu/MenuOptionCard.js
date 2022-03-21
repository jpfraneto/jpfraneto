import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MenuOptionCard.module.css';
import LinkedButton from '../Utils/LinkedButton';

const MenuOptionCard = ({ name, link }) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{name}</h3>
      <div className={styles.imageContainer}>
        <p>IMAGE</p>
      </div>

      <LinkedButton link={link} text={name} />
    </div>
  );
};

export default MenuOptionCard;
