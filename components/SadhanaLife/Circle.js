import React from 'react';
import styles from './Circle.module.css';
import Link from 'next/link';

const Circle = ({ i, el, link }) => {
  return (
    <Link href={link}>
      <span className={`${styles.indexCircle}`}>{i}</span>
    </Link>
  );
};

export default Circle;
