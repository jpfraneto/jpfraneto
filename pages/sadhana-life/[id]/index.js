import React from 'react';
import { connectToDatabase } from '../../../lib/mongodb';
import SadhanaPageComponent from '../../../components/SadhanaLife/SadhanaPageComponent';

const SadhanaPage = ({ sadhana }) => {
  return <SadhanaPageComponent sadhana={sadhana} />;
};

export default SadhanaPage;

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const sadhanas = await db.collection('sadhanas').find({}).toArray();
  const paths = sadhanas.map(sadhana => {
    return { params: { id: sadhana._id.toString() } };
  });
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();
  const sadhanas = await db.collection('sadhanas').find({}).toArray();
  const sadhana = sadhanas.find(sadhana => {
    return sadhana._id.toString() === params.id;
  });
  return {
    revalidate: 60,
    props: { sadhana: JSON.parse(JSON.stringify(sadhana)) },
  };
}