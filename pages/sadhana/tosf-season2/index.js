import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSeason2s } from 'contentlayer/generated';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import Circle from '../../../components/SadhanaLife/Circle';
import ElementsList from '../../../components/Layout/ElementsList';
import SadhanaElementDisplay from '../../../components/SadhanaLife/SadhanaDisplays/SadhanaElementDisplay';
import styles from '../../../styles/TOSF.module.css';
import { useState, useRef } from 'react';
import { connectToDatabase } from '../../../lib/mongodb';

export async function getStaticProps({ params }) {
  allSeason2s.sort((x, y) => (x.index > y.index ? 1 : -1));
  return { props: { elements: allSeason2s } };
}

const XilemaArtPage = ({ elements }) => {
  console.log('here', elements);
  const [chosenSadhana, setChosenSadhana] = useState(null);
  const sadhanaContainer = useRef();

  return (
    <>
      <Head>
        <title>· jp · sadhana · The Open Source Factory Season 2</title>
      </Head>
      <PageLayout>
        <h1>The Open Source Factory Season 2</h1>
        <hr />
        <h2>YIIIIAJUUUU </h2>

        <ElementsList>
          <div className={styles.circlesContainer}>
            {elements.map((x, index) => {
              return (
                <Circle
                  i={x.index}
                  setChosenSadhana={setChosenSadhana}
                  el={x}
                />
              );
            })}
          </div>
        </ElementsList>
        <div ref={sadhanaContainer}>
          {chosenSadhana && (
            <SadhanaElementDisplay
              elements={elements}
              setChosenSadhana={setChosenSadhana}
              chosenSadhana={chosenSadhana}
            />
          )}
        </div>
        <button onClick={saveSadhanasToDB}>Save to db</button>
        <ButtonBack linkReference='/sadhana' msg='Back to Sadhana' />
      </PageLayout>
    </>
  );
};

export default XilemaArtPage;
