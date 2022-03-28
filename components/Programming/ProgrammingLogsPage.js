import React, { useState } from 'react';
import styles from './ProgrammingLogsPage.module.css';
import {
  orderProgrammingLogs,
  durationFormatting,
} from '../../utils/functions';
import ProgrammingLogCard from './ProgrammingLogCard';
import DisplayedChart from '../Layout/DisplayedChart';
import Link from 'next/link';

function Circle(index) {
  return (
    <div className={styles.logCard}>
      <p>{index.index + 1}</p>
    </div>
  );
}

const ProgrammingLogsPage = ({ logs }) => {
  const arr = new Array(108 - logs.length).fill(null);
  const [programmingLogs, setProgrammingLogs] = useState([...logs, ...arr]);
  const [showRecording, setShowRecording] = useState(false);
  const [log, setLog] = useState(null);
  const evaluateCircleFilling = (log, index = 0) => {
    if (log)
      return <ProgrammingLogCard setLog={setLog} log={log} key={log.date} />;
    if (!log) return <Circle index={index} />;
  };
  return (
    <div className={styles.mainContainer}>
      <h1>Programming Logs</h1>
      <select>
        <option name='TOSF - Season 1' value='TOSF - Season 1'>
          TOSF - Season 1
        </option>
      </select>
      <div className={styles.logsContainer}>
        {programmingLogs.map((log, index) => evaluateCircleFilling(log, index))}
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
          {showRecording && (
            <div
              style={{
                position: 'relative',
                paddingBottom: 62.5 + '%',
                height: 0,
              }}
            >
              <iframe
                src={log.loomRecording.replace('share', 'embed')}
                frameborder='0'
                webkitAllowFullscreen
                mozAllowFullscreen
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          )}
          <button onClick={() => setShowRecording(prev => !prev)}>
            {showRecording ? 'Hide Recording' : 'Show Recording'}
          </button>
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
