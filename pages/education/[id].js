import Link from 'next/link';
import EducationLayout from '../../layouts/education';
import components from '../../components/MDXcomponents';
import { ObjectId } from 'mongodb';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { connectToDatabase } from '../../lib/mongodb';

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const allEducationLogs = await db.collection('education').find({}).toArray();
  console.log('in here, all education logs are: ', allEducationLogs);
  const paths = allEducationLogs.map(log => {
    return { params: { id: log._id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const thisEducationLog = await db
    .collection('education')
    .findOne({ _id: new ObjectId(params.id) });
  console.log('this education log is: ', thisEducationLog);
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
