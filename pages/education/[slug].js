import Link from 'next/link';
import EducationLayout from '../../layouts/education';
import components from '../../components/MDXcomponents';
import { allEducationPages } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allEducationPages.map(log => {
    return { params: { slug: log.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisEducationLog = allEducationPages.find(
    log => log.slug === params.slug
  );
  return { props: { log: JSON.parse(JSON.stringify(thisEducationLog)) } };
}

const EducationDisplayPage = ({ log }) => {
  const Component = useMDXComponent(log.body.code);
  return (
    <EducationLayout content={log}>
      <Component components={{ ...components }} />
    </EducationLayout>
  );
};

export default EducationDisplayPage;
