import React from 'react';
import SadhanaCard from './SadhanaCard';
import styles from './SadhanaLifeContainer.module.css';

const SadhanaLifeContainer = ({ sadhanas }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>Sadhanas</h1>
      <div className={styles.textContainer}>
        {/* <p>
          I have been given everything material in my life because of the place
          where I was born. What comes after you have everything you need to
          survive? A strong drive to deepen the connection with the self, and
          what has been the antidote for this drive, and the way to connect with
          it deeply, has been the practice of commiting to do the work every
          day.{' '}
        </p>
        <br />
        <p>
          This place is where I'll share my adventures and experiences in the
          different realms of action. The material here may be valuable for you.
        </p> */}
        <p>
          This is what happens when life provides you all the material well
          being that you need in life.
        </p>
        <br />
      </div>

      <div className={styles.sadhanasContainer}>
        {sadhanas.map(sadhana => (
          <SadhanaCard key={sadhana._id} sadhana={sadhana} />
        ))}
      </div>
    </div>
  );
};

export default SadhanaLifeContainer;
