import React, { useState } from 'react';
import styles from './SadhanaPageComponent.module.css';
import IndexCircle from './IndexCircle';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SadhanaPage = ({ sadhana }) => {
  const router = useRouter();
  console.log('the sadhana is: ', sadhana);
  const buildingBlocks = new Array(+sadhana.targetDuration).fill(null);
  const [thisSadhana, setThisSadhana] = useState({
    ...sadhana,
    buildingBlocks,
  });
  const [chosenDay, setChosenDay] = useState(null);
  return (
    <div className={styles.container}>
      <h1>{sadhana.title}</h1>
      <h3>Description:</h3>
      <p>{sadhana.description}</p>
      <h3>Motivation:</h3>
      <p>{sadhana.motivation}</p>

      <p>
        <strong>
          Completed {sadhana.buildingBlocks.length}/{+sadhana.targetDuration}
        </strong>
      </p>
      <div className={styles.indexCirclesContainer}>
        {thisSadhana.buildingBlocks.map((el, index) => (
          <IndexCircle
            setChosenDay={setChosenDay}
            key={index}
            el={el}
            i={index + 1}
          />
        ))}
      </div>
      <div>Here goes the description of day {chosenDay}</div>
      <Link href='/sadhana-life'>
        <a>Go Back</a>
      </Link>
    </div>
  );
};

export default SadhanaPage;
