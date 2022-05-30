import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSeason1s } from 'contentlayer/generated';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import Circle from '../../../components/SadhanaLife/Circle';
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
  return (
    <>
      <Head>
        <title>
          · jp · sadhana · The Open Source Factory Season 1 Last Sprint
        </title>
      </Head>
      <PageLayout>
        <h1>The Open Source Factory Season 1 - Last Sprint</h1>
        <hr />
        <h2>
          This is the world that I created to support my journey learning to
          code. I knew that what I needed was consistency, so I created this
          frame with which I brought consistency into my path. The best way to
          learn how to code is to build stuff, and in this project I posed
          myself the challenge of building an original app every month.
        </h2>
        <h2>
          After my daughter was born, I was having trouble finding time to
          organize the work every day, so I decided to pose myself the challenge
          of programming at least 88 minutes every day, except saturdays, which
          is family day. This sadhana is the consequence of that.
        </h2>

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
        <ButtonBack linkReference='/sadhana' msg='Back to Sadhana' />
      </PageLayout>
    </>
  );
};

export default XilemaArtPage;
