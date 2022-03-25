import React from 'react';
import EducationCard from './EducationCard';
import Link from 'next/link';
import styles from './EducationMain.module.css';

const EducationMain = ({ logs }) => {
  return (
    <div className={styles.mainContainer}>
      {logs.map((log, i) => (
        <EducationCard ed={log} />
      ))}
      <Link href='/menu'>
        <a>Go back to menu</a>
      </Link>
    </div>
  );
};

export default EducationMain;
