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
        <GiTargeted /> {'  '}
        {sadhana.targetDuration} {sadhana.periodicity}
      </span>
      <p>{sadhana.description?.substring(0, 88)}...</p>
      <div className={styles.btnContainer}>
        <Link href={`/sadhana-life/${sadhana._id}`}>
          <a>Go</a>
        </Link>
      </div>
    </div>
  );
};

export default SadhanaCard;
