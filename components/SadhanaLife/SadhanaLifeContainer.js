import React from 'react';
import SadhanaCard from './SadhanaCard';
import styles from './SadhanaLifeContainer.module.css';

const sadhanas = [
  {
    id: '21313',
    title: 'Building Human Music',
    targetDays: 100,
    description: 'Building Human Music',
    goal: 'Code at least 30 minutes every day.',
    motivation:
      'Going through the creatives workshop with the concept of dailies',
    video: 'https://www.youtube.com/watch?v=3aJ8LIR4yjw',
    keywords: ['programming'],
    slug: 'building-human-music',
    startingDate: '222019VIII',
    started: true,
    completed: true,
  },

  {
    id: '193810',
    title: 'TOSF Last Sprint',
    targetDays: 108,
    description: 'This is the last sprint of the open source factory',
    goal: 'Code at least 88 minutes every day. Saturdays I rest',
    motivation:
      'Here goes a motivation paragraph for every time that I feel strange',
    video: 'https://www.youtube.com/watch?v=3aJ8LIR4yjw',
    keywords: ['programming'],
    slug: 'tosf-last-sprint-season-1',
    startingDate: '222022II',
    started: true,
    completed: false,
  },
  {
    id: '2356523',
    title: 'Cuarentena Kirtan Kriya',
    targetDays: 40,
    description: 'Primera cuarentena Kirtan Kriya',
    goal: 'Practice this kriya every day for 31 minutes',
    motivation: 'Deepening my practice of kundalini yoga',
    video: 'https://www.youtube.com/watch?v=3aJ8LIR4yjw',
    keywords: ['yoga'],
    slug: 'cuarentena-1-kirtan-kriya',
    startingDate: '222022II',
    started: true,
    completed: true,
  },
  {
    id: '193810',
    title: 'Vegan OMAD First Try',
    targetDays: 21,
    description: 'Eating Vegan OMAD for 21 days',
    goal: 'Eating one meal a day for 21 days.',
    motivation: 'Heal my relationship with food',
    video: 'https://www.youtube.com/watch?v=3aJ8LIR4yjw',
    keywords: ['lifestyle'],
    slug: 'vegan-omad-first',
    startingDate: '282022III',
    started: false,
    completed: false,
  },
];

const SadhanaLifeContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Sadhanas</h1>
      <div className={styles.textContainer}>
        <p>
          I have been given everything material in my life because of the place
          where I was born. What comes after you have everything? A strong drive
          to deepen the connection with the self, and what has been the antidote
          for this drive, and the way to connect with it deeply, has been the
          practice of commiting to do the work every day.{' '}
        </p>
        <p>
          This place is where I'll share my adventures and experiences in the
          different realms of action.{' '}
        </p>
        <div className={styles.legendDivContainer}>
          <strong>Legend:</strong>
          <div
            className={styles.legendDiv}
            style={{ backgroundColor: 'green' }}
          >
            Completed
          </div>
          <div
            className={styles.legendDiv}
            style={{ backgroundColor: 'yellow' }}
          >
            Started
          </div>
          <div
            className={styles.legendDiv}
            style={{ backgroundColor: 'transparent' }}
          >
            Scheduled
          </div>
        </div>
      </div>

      <div className={styles.sadhanasContainer}>
        {sadhanas.map(sadhana => (
          <SadhanaCard key={sadhana.id} sadhana={sadhana} />
        ))}
      </div>
    </div>
  );
};

export default SadhanaLifeContainer;
