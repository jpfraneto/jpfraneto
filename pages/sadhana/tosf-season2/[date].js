import Link from 'next/link';
import components from '../../../components/MDXcomponents';
import { allSeason2s } from 'contentlayer/generated';
import SadhanaLayout from '../../../layouts/sadhana';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allSeason2s.map(piece => {
    return { params: { date: piece.date } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisElement = allSeason2s.find(piece => piece.date === params.date);
  return { props: { piece: JSON.parse(JSON.stringify(thisElement)) } };
}

const XilemaArtPage = ({ piece }) => {
  const Component = useMDXComponent(piece.body.code);
  return (
    <SadhanaLayout content={piece}>
      <Component components={{ ...components }} />
    </SadhanaLayout>
  );
};

export default XilemaArtPage;
