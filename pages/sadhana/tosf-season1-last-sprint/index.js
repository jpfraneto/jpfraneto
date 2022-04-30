import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSeason1s } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ButtonBack from '../../../components/Layout/ButtonBack';
import ElementsList from '../../../components/Layout/ElementsList';

export async function getStaticProps({ params }) {
  allSeason1s.sort((x, y) => (x.index > y.index ? 1 : -1)).reverse();
  return { props: { elements: allSeason1s } };
}

const XilemaArtPage = ({ elements }) => {
  return (
    <div>
      <Head>
        <title>
          · jp · sadhana · The Open Source Factory Season 1 Last Sprint
        </title>
      </Head>
      <PageLayout>
        <h1>The Open Source Factory Season 1 - Last Sprint</h1>
        <hr />
        <h2>What is this sadhana about? WRITE HERE!</h2>
        <ElementsList>
          {elements.map((x, index) => (
            <Link
              key={index}
              href={`/sadhana/tosf-season1-last-sprint/${x.date}`}
            >
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
