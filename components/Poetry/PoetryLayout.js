import React, { useState } from 'react';
import Image from 'next/image';
import styles from './PoetryLayout.module.css';
import ChosenPoemDisplay from './ChosenPoemDisplay';

const PoetryLayout = ({ poems }) => {
  const [chosenPoem, setChosenPoem] = useState(null);
  return (
    <div>
      {chosenPoem && <ChosenPoemDisplay poem={chosenPoem} />}
      <div className={styles.poemsContainer}>
        {poems.map((poem, index) => {
          return (
            <div
              onClick={() => setChosenPoem(poem)}
              className={styles.imageContainer}
            >
              <Image src={poem.albumImageUrl} width='100' height='100' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PoetryLayout;
