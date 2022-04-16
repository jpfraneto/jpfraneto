import Link from 'next/link';
import XilemaLayout from '../../../layouts/xilema';
import components from '../../../components/MDXcomponents';
import { allSeason1s } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import PageLayout from '../../../components/Layout/PageLayout';
import ElementsList from '../../../components/Layout/ElementsList';

export async function getStaticProps({ params }) {
  allSeason1s.sort((x, y) => (x.index > y.index ? 1 : -1));
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
        <h2>
          I commit to do something and try my best to stick with it, so that the
          repetition can teach me what I need to learn in order to evolve. Doing
          the work when you dont want to is the best predictor of long term
          results.
        </h2>
        <ElementsList>
          {elements.map(x => (
            <Link href={`/sadhana/tosf-season1-last-sprint/${x.date}`}>
              <a>{x.date}</a>
            </Link>
          ))}
        </ElementsList>
      </PageLayout>
    </div>
  );
};

export default XilemaArtPage;
