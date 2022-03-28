import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Office.module.css';
import { connectToDatabase } from '../../lib/mongodb2';

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const data = await db.collection('dailies').find({}).toArray();
  data.sort((a, b) => (a.index > b.index ? 1 : -1));
  return { props: { dailies: JSON.parse(JSON.stringify(data)) } };
}

export default function Home({ dailies }) {
  const [chosenDaily, setChosenDaily] = useState({});
  const handleDailyChange = changer => {
    const newDaily = dailies.find(x => x.index === chosenDaily.index + changer);
    if (newDaily) return setChosenDaily(newDaily);
    if (changer === -1) return alert('That is the first daily!');
    if (changer === 1) return alert('That is the last daily!');
  };
  return (
    <div className={styles.officeDiv}>
      <Head>
        <title>The Office</title>
      </Head>
      <div className={styles.dailiesContainer}>
        {dailies.map((daily, index) => (
          <span
            onClick={() => setChosenDaily(daily)}
            className={`${styles.dailiesNumber}`}
            key={index}
          >
            {daily.index}
          </span>
        ))}
      </div>
      {chosenDaily && (
        <div className={styles.chosenDailyContainer}>
          <button onClick={() => handleDailyChange(-1)}>Previous</button>
          <button onClick={() => handleDailyChange(1)}>Next</button>
          <h3>{chosenDaily.index}</h3>
          <p>{chosenDaily.date}</p>
          <p>
            <strong>Feeling: {chosenDaily.feeling}</strong>
          </p>
          <p>{chosenDaily.description}</p>
          <button onClick={() => handleDailyChange(-1)}>Previous</button>
          <button onClick={() => handleDailyChange(1)}>Next</button>
        </div>
      )}
    </div>
  );
}
