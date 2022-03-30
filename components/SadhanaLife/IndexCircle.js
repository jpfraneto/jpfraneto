import React from 'react';
import styles from './IndexCircle.module.css';

const IndexCircle = ({ i, el, setChosenBuildingBlock }) => {
  return (
    <span
      onClick={() => setChosenBuildingBlock(el)}
      className={`${styles.indexCircle} ${
        el ? styles.availableBuildingBlock : styles.nonAvailableBuildingBlock
      }`}
    >
      {i}
    </span>
  );
};

export default IndexCircle;
