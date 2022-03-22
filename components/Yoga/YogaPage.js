import React from 'react';
import styles from './YogaPage.module.css';
import YogaLogCard from './YogaLogCard';
import Link from 'next/link';

const YogaPage = ({ logs }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>Yoga Logs</h1>
      <div className={styles.logsContainer}>
        {logs.map(log => (
          <YogaLogCard log={log} />
        ))}
      </div>
      <Link href='/menu'>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default YogaPage;
