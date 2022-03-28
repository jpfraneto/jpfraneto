import React from 'react';
import styles from './IndexCircle.module.css';

const IndexCircle = ({ i, setChosenDay }) => {
  return (
    <span onClick={() => setChosenDay(i)} className={styles.indexCircle}>
      {i}
    </span>
  );
};

export default IndexCircle;
