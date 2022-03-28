import React from 'react';
import SadhanaLifeContainer from '../../components/SadhanaLife/SadhanaLifeContainer';

const SadhanaLifePage = ({ sadhanas }) => {
  console.log('INSIDE HERE, THE SADHANAS ARE: ', sadhanas);
  return <SadhanaLifeContainer />;
};

export async function getStaticProps() {
  // const { db } = await connectToDatabase();
  // const data = await db.collection('looms').find({}).toArray();
  const data = [123, 213];
  return {
    props: {
      sadhanas: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default SadhanaLifePage;
