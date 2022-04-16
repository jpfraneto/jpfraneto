import Link from 'next/link';
import XilemaLayout from '../../layouts/xilema';
import components from '../../components/MDXcomponents';
import { allXilemaPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allXilemaPages.map(piece => {
    return { params: { slug: piece.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisArtPiece = allXilemaPages.find(piece => piece.slug === params.slug);
  return { props: { piece: JSON.parse(JSON.stringify(thisArtPiece)) } };
}

const XilemaArtPage = ({ piece }) => {
  const Component = useMDXComponent(piece.body.code);
  return (
    <XilemaLayout content={piece}>
      <Component components={{ ...components }} />
    </XilemaLayout>
  );
};

export default XilemaArtPage;
