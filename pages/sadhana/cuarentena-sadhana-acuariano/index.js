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
    x => x.sadhanaslug === 'cuarentena-sadhana-acuariano'
  );
  filtered.sort((x, y) => (x.index > y.index ? 1 : -1));
  return { props: { elements: filtered } };
}
const XilemaArtPage = ({ elements }) => {
  const [chosenSadhana, setChosenSadhana] = useState(null);

  return (
    <>
      <Head>
        <title>· jp · sadhana · Cuarentena Sadhana Acuariano</title>
      </Head>
      <PageLayout>
        <h1>Cuarentena Sadhana Acuariano</h1>
        <hr />
        <h2>
          The last part of my teaching to be a Kundalini Yoga, coming back every
          day at 5am to do the work. The Sadhana Acuariano is a practice that
          consists of the chanting of a sacred chant called Jabji, followed by a
          Kundalini Yoga practice, which in this case will be the Kriya for the
          Heart and Soul. All this is ended by the resonating of the Aquarian
          Mantras, which is a set of 7 mantras that are meditated and chanted in
          a particular order.
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
