import React, { useState } from 'react';
import styles from './SadhanaPageComponent.module.css';
import IndexCircle from './IndexCircle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsPlusSquareDotted } from 'react-icons/bs';
import Moment from 'react-moment';

const SadhanaPage = ({ sadhana }) => {
  const router = useRouter();
  if (!sadhana) return <h2>Loading!!</h2>;
  const goToBuildingBlock = () => {
    const pw = prompt('What is the password?');
    router.push({
      pathname: `/sadhana-life/${router.query.id}/new-building-block`,
      query: {
        pw,
        title: sadhana.title,
        index: sadhana.buildingBlocks.length + 1,
      },
    });
  };
  const buildingBlocks = [
    ...sadhana.buildingBlocks,
    ...new Array(+sadhana.targetDuration - sadhana.buildingBlocks.length).fill(
      null
    ),
  ];

  const [thisSadhana, setThisSadhana] = useState({
    ...sadhana,
    buildingBlocks,
  });
  const [chosenBuildingBlock, setChosenBuildingBlock] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.addNewBuildingBlockBtn}>
        <a onClick={goToBuildingBlock}>
          <BsPlusSquareDotted />
        </a>
      </div>
      <h1>{sadhana.title}</h1>
      <h3>Description:</h3>
      <p>{sadhana.description}</p>
      <h3>Motivation:</h3>
      <p>{sadhana.motivation}</p>

      <p>
        <strong>
          Completed {sadhana.buildingBlocks.length}/{+sadhana.targetDuration}
        </strong>
      </p>
      <div className={styles.indexCirclesContainer}>
        {thisSadhana.buildingBlocks.map((el, index) => (
          <IndexCircle
            setChosenBuildingBlock={setChosenBuildingBlock}
            key={index}
            el={el}
            i={index + 1}
          />
        ))}
      </div>
      {chosenBuildingBlock && (
        <div className={styles.buildingBlockDisplay}>
          <p>{chosenBuildingBlock.index}</p>
          <Moment date={chosenBuildingBlock.date} />
          <h4>{chosenBuildingBlock.title}</h4>
          <p>{chosenBuildingBlock.description}</p>
          <p>Feeling: {chosenBuildingBlock.feeling}</p>
          <p>Duration: {chosenBuildingBlock.duration}</p>
        </div>
      )}

      <Link href='/sadhana-life'>
        <a>Go Back</a>
      </Link>
    </div>
  );
};

export default SadhanaPage;
