import React from 'react';
import { connectToDatabase } from '../../lib/mongodb';
import SadhanaLifeContainer from '../../components/SadhanaLife/SadhanaLifeContainer';

const SadhanaLifePage = ({ sadhanas }) => {
  return <SadhanaLifeContainer sadhanas={sadhanas} />;
};

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const sadhanas = await db
    .collection('sadhanas')
    .find({}, { _id: 1 })
    .toArray();

  return {
    props: {
      sadhanas: JSON.parse(JSON.stringify(sadhanas)),
    },
  };
}

export default SadhanaLifePage;
