import React, { useState } from 'react';
import styles from './ProgrammingLogsPage.module.css';
import {
  orderProgrammingLogs,
  durationFormatting,
} from '../../utils/functions';
import ProgrammingLogCard from './ProgrammingLogCard';
import DisplayedChart from '../Layout/DisplayedChart';
import Link from 'next/link';

const projects = [
  { url: 'https://www.human-music.com', name: 'Human Music' },
  { url: 'https://www.holamila.com', name: 'Hola Mila' },
  {
    url: 'https://www.theopensourcefactory.com',
    name: 'The Open Source Factory',
  },
  {
    url: 'https://www.drip-work.app',
    name: 'Drip Work',
  },
  {
    url: 'https://www.mamiferas.org',
    name: 'Mamiferas',
  },
  {
    url: 'https://www.worldsofsound.org',
    name: 'Worlds Of Sound',
  },
  {
    url: 'https://www.rudraky.com',
    name: 'Rudra KY',
  },
];

const ProgrammingLogsPage = ({ logs }) => {
  const [chosenProject, setChosenProject] = useState(null);
  return (
    <div className={styles.mainContainer}>
      <h1>Programming</h1>
      <p>This are some of the projects that I have built:</p>
      <div>
        <ul>
          {projects.map(project => (
            <li onClick={() => setChosenProject(project)}>
              <strong>{project.name}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgrammingLogsPage;
