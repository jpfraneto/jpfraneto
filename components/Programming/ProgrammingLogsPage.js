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
  const [log, setLog] = useState(null);
  return (
    <div className={styles.mainContainer}>
      <h1>Programming Logs</h1>
      <div className={styles.logsContainer}>
        {programmingLogs.map(log => (
          <ProgrammingLogCard setLog={setLog} log={log} key={log.date} />
        ))}
      </div>
      {log && (
        <div className={styles.logDisplayContainer}>
          <p>{log.title}</p>
          <p>{log.date}</p>
          <p>
            {log.sessionDuration
              ? log.sessionDuration
              : 'No duration available'}
          </p>
          <div>
            <strong>{log.body?.raw}</strong>
          </div>
        </div>
      )}
      <Link href='/menu'>
        <a>Go back!</a>
      </Link>
    </div>
  );
};

export default ProgrammingLogsPage;
