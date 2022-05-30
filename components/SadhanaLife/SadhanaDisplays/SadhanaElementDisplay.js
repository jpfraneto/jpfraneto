import React from 'react';
import styles from './SadhanaElementDisplay.module.css';
import LoomPlayer from '../../Layout/LoomPlayer';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const SadhanaElementDisplay = ({
  chosenSadhana,
  elements,
  setChosenSadhana,
}) => {
  const handleChangeSadhana = num => {
    if (parseInt(num) === -1 && chosenSadhana.index === 1)
      return alert('You are in the first element');
    if (parseInt(num) === 1 && chosenSadhana.index === elements.length)
      return alert('You are in the last element');
    const newElement = elements.filter(
      x => x.index === chosenSadhana.index + parseInt(num)
    );
    setChosenSadhana(newElement[0]);
  };
  return (
    <article className={styles.articleContainer}>
      <h4>
        <span
          className={styles.sadhanaChanger}
          onClick={() => handleChangeSadhana(-1)}
        >
          <GrFormPrevious color='white' />
          {'    '}
        </span>
        {chosenSadhana.index} / {chosenSadhana.total} - {chosenSadhana.date}
        <span
          className={styles.sadhanaChanger}
          onClick={() => handleChangeSadhana(+1)}
        >
          {'    '}
          <GrFormNext style={{ color: 'white' }} />
        </span>
      </h4>
      <h2>
        <strong>{chosenSadhana.title}</strong>
      </h2>
      <LoomPlayer url={chosenSadhana.loomRecording} />
      <div className={styles.sadhanaText}>{chosenSadhana.body.raw}</div>
    </article>
  );
};

export default SadhanaElementDisplay;
