import React from 'react';
import styles from './ProgrammingLogCard.module.css';
import Link from 'next/link';

const ProgrammingLogCard = ({ log, setLog }) => {
  return (
    <Link href={log.url}>
      <div onMouseEnter={() => setLog(log)} className={styles.logCard}>
        {log.index} - {log.date}
      </div>
    </Link>
  );
};

export default ProgrammingLogCard;
