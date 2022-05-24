import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allYogaPreuniversitarios } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import ElementsList from '../../../components/Layout/ElementsList';

export async function getStaticProps({ params }) {
  allYogaPreuniversitarios
    .sort((x, y) => (x.index > y.index ? 1 : -1))
    .reverse();
  return { props: { elements: allYogaPreuniversitarios } };
}

const XilemaArtPage = ({ elements }) => {
  return (
    <div>
      <Head>
        <title>· jp · sadhana · Yoga Preuniversitario</title>
      </Head>
      <PageLayout>
        <h1>Yoga Preuniversitario</h1>
        <hr />
        <h2>What is this sadhana about? WRITE HERE!</h2>
        <ElementsList>
          {elements.map((x, index) => (
            <Link key={index} href={`/sadhana/yoga-preuniversitario/${x.date}`}>
              <a>
                {elements.length - index} /// {x.date}
              </a>
            </Link>
          ))}
          <ButtonBack linkReference='/sadhana' msg='Back to Sadhana' />
        </ElementsList>
      </PageLayout>
    </div>
  );
};

export default XilemaArtPage;
