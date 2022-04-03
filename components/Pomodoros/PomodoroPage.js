import React from 'react';
import PomodoroTomato from './PomodoroTomato';
import styles from './PomodoroPage.module.css';
import PomodoroClock from './PomodoroClock';
const arr = new Array(10).fill(8);

const PomodoroPage = () => {
  return (
    <div className={styles.container}>
      <PomodoroClock />
      <div className={styles.tomatoesContainer}>
        {arr.map(x => (
          <PomodoroTomato />
        ))}
      </div>
    </div>
  );
};

export default PomodoroPage;
