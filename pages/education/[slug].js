import { allEducationLogs } from 'contentlayer/generated';
import EducationPageDisplay from '../../components/Education/EducationPageDisplay';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = allEducationLogs.map(log => {
    return { params: { slug: log.id } };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const education = allEducationLogs.find(log => {
    return log.id === params.slug;
  });
  return { props: { education } };
}
const EducationDisplayPage = ({ education }) => {
  return (
    <>
      <Link href='/education'>
        <a>Go Back!</a>
      </Link>
      <EducationPageDisplay ed={education} />
    </>
  );
};

export default EducationDisplayPage;
