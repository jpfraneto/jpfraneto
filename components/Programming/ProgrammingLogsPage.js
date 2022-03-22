import React, { useState } from 'react';
import styles from './ProgrammingLogsPage.module.css';
import {
  orderProgrammingLogs,
  durationFormatting,
} from '../../utils/functions';
import ProgrammingLogCard from './ProgrammingLogCard';
import DisplayedChart from '../Layout/DisplayedChart';
import Link from 'next/link';

const ProgrammingLogsPage = ({ logs }) => {
  const [programmingLogs, setProgrammingLogs] = useState(logs);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logsContainer}>
        {programmingLogs.map(log => (
          <ProgrammingLogCard log={log} key={log.date} />
        ))}
      </div>
      <div className={styles.otherContainer}>
        <DisplayedChart
          data={programmingLogs.map(log => ({
            duration: durationFormatting(log.sessionDuration),
            date: log.date,
          }))}
        />
      </div>
      <Link href='/menu'>
        <a>Go back!</a>
      </Link>
    </div>
  );
};

export default ProgrammingLogsPage;
