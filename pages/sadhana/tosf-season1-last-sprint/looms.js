import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSeason1s } from 'contentlayer/generated';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import Circle from '../../../components/SadhanaLife/Circle';
import RecordingCard from '../../../components/SadhanaLife/RecordingCard';
import ElementsList from '../../../components/Layout/ElementsList';
import SadhanaElementDisplay from '../../../components/SadhanaLife/SadhanaDisplays/SadhanaElementDisplay';
import styles from '../../../styles/TOSF.module.css';
import { useState, useRef } from 'react';

export async function getStaticProps({ params }) {
  allSeason1s.sort((x, y) => (x.index > y.index ? 1 : -1));
  return { props: { elements: allSeason1s } };
}

const XilemaArtPage = ({ elements }) => {
  const [chosenSadhana, setChosenSadhana] = useState(null);
  const sadhanaContainer = useRef();
  console.log('the elements are: ', elements);
  return (
    <>
      <Head>
        <title>
          · jp · sadhana · The Open Source Factory Season 1 Last Sprint
        </title>
      </Head>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        The Open Source Factory Season 1 - Last Sprint
      </h1>
      <hr />
      <div className={styles.recordingsContainer}>
        {elements.map((x, i) => {
          return <RecordingCard recording={x.loomRecording} />;
        })}
      </div>
    </>
  );
};

export default XilemaArtPage;
