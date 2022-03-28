import React from 'react';
import styles from './SadhanaCard.module.css';
import { GiTargeted } from 'react-icons/gi';
import { useRouter } from 'next/router';

const SadhanaCard = ({ sadhana }) => {
  const router = useRouter();
  return (
    <div
      className={styles.cardContainer}
      onClick={() => router.push(`/sadhana-life/${sadhana.slug}`)}
      style={{
        backgroundColor: sadhana.started
          ? sadhana.completed
            ? 'green'
            : 'yellow'
          : 'transparent',
      }}
    >
      <h3>{sadhana.title}</h3>
      <span className={styles.targetSpan}>
        <GiTargeted /> {'  '}
        {sadhana.targetDays}
      </span>
      <p>{sadhana.description}</p>
    </div>
  );
};

export default SadhanaCard;
