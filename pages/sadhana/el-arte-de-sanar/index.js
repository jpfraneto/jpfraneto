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
  const filtered = allSadhanaEntries.filter(
    x => x.sadhanaslug === 'el-arte-de-sanar'
  );
  filtered.sort((x, y) => (x.index > y.index ? 1 : -1));
  return { props: { elements: filtered } };
}
const XilemaArtPage = ({ elements }) => {
  const [chosenSadhana, setChosenSadhana] = useState(null);

  return (
    <>
      <Head>
        <title>· jp · sadhana · El Arte de Sanar</title>
      </Head>
      <PageLayout>
        <h1>El Arte de Sanar</h1>
        <hr />
        <h2>
          Este es un ciclo de clases de hatha/ashtanga yoga que creó mi gran
          maestra Diana Vergara (yogabonito.in), y que contemplaba 3 meses de
          práctica que no pude hacer sincrónicamente asi que para ponerme al día
          lo voy a comenzar a hacer hoy, todos los días menos el sábado.
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
