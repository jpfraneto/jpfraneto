import { useState } from 'react';
import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSadhanaEntries } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import ElementsList from '../../../components/Layout/ElementsList';
import styles from '../../../styles/SadhanaPage.module.css';
import Circle from '../../../components/SadhanaLife/Circle';
import YogaPreuniversitarioSadhanaDisplay from '../../../components/SadhanaLife/SadhanaDisplays/YogaPreuniversitarioSadhanaDisplay';

export async function getStaticProps({ params }) {
  allSadhanaEntries.filter(
    x => x.sadhanaslug === 'yoga-preuniversitario-season-1'
  );
  allSadhanaEntries.sort((x, y) => (x.index > y.index ? 1 : -1));
  return { props: { elements: allSadhanaEntries } };
}

const XilemaArtPage = ({ elements }) => {
  const [chosenSadhana, setChosenSadhana] = useState(null);
  return (
    <div>
      <Head>
        <title>· jp · sadhana · Yoga Preuniversitario</title>
      </Head>
      <PageLayout>
        <h1>Yoga Preuniversitario</h1>
        <hr />
        <h2>
          I'm ending my education for being a Kundalini Yoga teacher with this
          final project, on which I will teach yoga and meditation to young
          people that are going through the hard phase of their life on which
          they prepare to the admission test for higher education. They also
          have to decide what they want to study, so there is a lot of stress
          going on in this period of their life. I will use the tools and
          techniques of yoga to help them, and through that understand where I
          am at in my own path. Teaching builds mastery.
        </h2>
        <ElementsList>
          <div className={styles.circlesContainer}>
            {elements.map((x, index) => {
              return (
                <Circle
                  link={`/sadhana/yoga-preuniversitario-season-1/${x.index}`}
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
    </div>
  );
};

export default XilemaArtPage;
