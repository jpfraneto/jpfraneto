import React from 'react';
import styles from './ProgrammingLogCard.module.css';
import Link from 'next/link';

const ProgrammingLogCard = ({ log }) => {
  return (
    <Link href={log.url}>
      <div className={styles.logCard}>
        {log.index} - {log.date}
      </div>
    </Link>
  );
};

export default ProgrammingLogCard;
