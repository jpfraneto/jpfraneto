import React, { useState } from 'react';
import styles from './SadhanaPageComponent.module.css';
import IndexCircle from './IndexCircle';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SadhanaPage = ({ sadhana }) => {
  const router = useRouter();
  const [thisSadhana, setThisSadhana] = useState(new Array(100).fill(null));
  const [chosenDay, setChosenDay] = useState(null);
  return (
    <div className={styles.container}>
      <h1>{router.query.title}</h1>
      <p>Here goes the description</p>
      <p>Completed 9/100</p>
      <div className={styles.indexCirclesContainer}>
        {thisSadhana.map((el, index) => (
          <IndexCircle
            setChosenDay={setChosenDay}
            key={index}
            el={el}
            i={index}
          />
        ))}
      </div>
      <div>Here go the description of the chosen day {chosenDay}</div>
      <Link href='/sadhana-life'>
        <a>Go Back</a>
      </Link>
    </div>
  );
};

export default SadhanaPage;
