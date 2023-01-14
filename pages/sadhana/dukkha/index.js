import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSadhanaEntries } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import Circle from '../../../components/SadhanaLife/Circle';
import ElementsList from '../../../components/Layout/ElementsList';
import styles from '../../../styles/TOSF.module.css';
import { useState } from 'react';
import YogaPreuniversitarioSadhanaDisplay from '../../../components/SadhanaLife/SadhanaDisplays/YogaPreuniversitarioSadhanaDisplay';

export async function getStaticProps({ params }) {
  const filtered = allSadhanaEntries.filter(x => x.sadhanaslug === 'dukkha');
  filtered.sort((x, y) => (x.index > y.index ? 1 : -1));
  return { props: { elements: filtered } };
}
const XilemaArtPage = ({ elements }) => {
  const [chosenSadhana, setChosenSadhana] = useState(null);

  return (
    <>
      <Head>
        <title>· jp · sadhana · Dukkha</title>
      </Head>
      <PageLayout>
        <h1>Dukkha</h1>
        <hr />

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
        <ButtonBack linkReference='/sadhana' msg='Back to Sadhanas' />
        {chosenSadhana && (
          <YogaPreuniversitarioSadhanaDisplay
            chosenSadhana={chosenSadhana}
            setChosenSadhana={setChosenSadhana}
            elements={elements}
          />
        )}
      </PageLayout>
    </>
  );
};

export default XilemaArtPage;
