import React from 'react';
import styles from './Circle.module.css';
import Link from 'next/link';

const Circle = ({ i, el, link, setChosenSadhana }) => {
  return (
    <span
      onClick={() => setChosenSadhana(el)}
      className={`${styles.indexCircle}`}
    >
      {i}
    </span>
  );
};

export default Circle;
