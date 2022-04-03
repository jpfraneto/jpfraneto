import React, { useState } from 'react';
import styles from './PomodoroClock.module.css';
import { timeFormatting } from './functions';

const PomodoroClock = () => {
  const [timerTime, setTimerTime] = useState(25 * 60);
  const startPomodoro = () => {
    const timeout = setInterval(() => {
      setTimerTime(x => x - 1);
    }, 1000);
  };
  return (
    <div className={styles.clockContainer}>
      {timeFormatting(timerTime)}
      <div className={styles.controls}>
        <button onClick={startPomodoro}>Start</button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default PomodoroClock;
