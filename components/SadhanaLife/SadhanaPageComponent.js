import React, { useState } from 'react';
import styles from './SadhanaPageComponent.module.css';
import IndexCircle from './IndexCircle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsPlusSquareDotted } from 'react-icons/bs';
import LoomPlayer from '../Layout/LoomPlayer';
import ReactPlayer from 'react-player';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

const SadhanaPage = ({ sadhana }) => {
  sadhana.buildingBlocks.sort((a, b) => {
    return a.index < b.index ? -1 : 1;
  });
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
  const [chosenBuildingBlock, setChosenBuildingBlock] = useState(null);
  const changeIndex = num => {
    setChosenBuildingBlock(prev => {
      const newBuildingBlock = sadhana.buildingBlocks.find(
        x => x.index === prev.index + num
      );
      if (newBuildingBlock) return newBuildingBlock;
      if (num < 0) alert('That is the first element of the list!');
      if (num > 0) alert('That is the last element of the list!');
      return prev;
    });
  };
  return (
    <div className={styles.container}>
      {+sadhana.targetDuration !== sadhana.buildingBlocks.length && (
        <div className={styles.addNewBuildingBlockBtn}>
          <a onClick={goToBuildingBlock}>
            <BsPlusSquareDotted />
          </a>
        </div>
      )}

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
        {sadhana.buildingBlocks.map((el, index) => (
          <IndexCircle
            setChosenBuildingBlock={setChosenBuildingBlock}
            key={index}
            el={el}
            i={el.index}
          />
        ))}
      </div>

      {chosenBuildingBlock && (
        <div className={styles.buildingBlockDisplay}>
          <h2 className={styles.prevNextBtns}>
            <span onClick={() => changeIndex(-1)}>
              <GrLinkPrevious />
            </span>
            <span className={styles.indexNumber}>
              {chosenBuildingBlock.index}
            </span>
            <span onClick={() => changeIndex(+1)}>
              <GrLinkNext />
            </span>
          </h2>
          {Object.keys(chosenBuildingBlock).map((key, index) => {
            return (
              <div className={styles.elementContainer}>
                {[
                  'loomRecording',
                  'music',
                  'building',
                  '_id',
                  'content',
                  'index',
                  '__v',
                ].indexOf(key) === -1 ? (
                  <p>
                    <strong>{key}</strong> : {chosenBuildingBlock[key]}
                  </p>
                ) : (
                  <>
                    {key === 'content' && (
                      <div className={styles.contentBody}>
                        {chosenBuildingBlock[key]}
                      </div>
                    )}
                    {key === 'loomRecording' && (
                      <LoomPlayer url={chosenBuildingBlock[key]} />
                    )}
                    {key === 'music' && chosenBuildingBlock[key] && (
                      <ReactPlayer url={chosenBuildingBlock[key]} />
                    )}
                    {key === 'building' && (
                      <p>
                        Building:{' '}
                        <a
                          href={`https://${chosenBuildingBlock[key]}`}
                          target='_blank'
                        >
                          {chosenBuildingBlock[key]}
                        </a>
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
          <h2 className={styles.prevNextBtns}>
            <span onClick={() => changeIndex(-1)}>
              <GrLinkPrevious />
            </span>
            <span className={styles.indexNumber}>
              {chosenBuildingBlock.index}
            </span>
            <span onClick={() => changeIndex(+1)}>
              <GrLinkNext />
            </span>
          </h2>
        </div>
      )}
      <div className={styles.goBackBtnContainer}>
        <Link href='/sadhana-life'>
          <a className={styles.goBackBtn}>Go Back</a>
        </Link>
      </div>
    </div>
  );
};

export default SadhanaPage;
