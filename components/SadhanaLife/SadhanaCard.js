import React from 'react';
import styles from './SadhanaCard.module.css';
import Link from 'next/link';
import { GiTargeted } from 'react-icons/gi';
import { useRouter } from 'next/router';

const SadhanaCard = ({ sadhana }) => {
  console.log('the sadhana is: ', sadhana);
  return (
    <div
      className={styles.cardContainer}
      style={{
        backgroundColor: sadhana.active
          ? sadhana.completed
            ? 'green'
            : 'yellow'
          : 'transparent',
      }}
    >
      <h3>{sadhana.title}</h3>
      <span className={styles.targetSpan}>
        <GiTargeted style={{ margin: '0 4px' }} /> {'    '}
        {sadhana.targetDuration} {sadhana.periodicity}
      </span>
      <div className={styles.btnContainer}>
        <Link href={`/sadhanas/${sadhana.slug}`}>
          <a>Go</a>
        </Link>
      </div>
      <div className={styles.statusContainer}>{sadhana.status}</div>
    </div>
  );
};

export default SadhanaCard;
