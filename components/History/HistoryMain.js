import React from 'react';
import styles from './HistoryMain.module.css';
import YearContainer from './YearContainer';

const HistoryMain = ({ timeline }) => {
  return (
    <div className={styles.storyContainer}>
      {timeline.map((el, index) => (
        <YearContainer year={el.year} tl={el} key={index} />
      ))}
    </div>
  );
};

export default HistoryMain;
