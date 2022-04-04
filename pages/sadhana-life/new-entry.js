import React from 'react';
import NewGenericBuildingBlockPage from '../../components/SadhanaLife/NewGenericBuildingBlockPage';
import { useRouter } from 'next/router';

const NewGenericBuildingBlock = () => {
  const router = useRouter();
  if (router.query.pw !== 'g4vf4v1fdvfdg') return <h2>Invalid password</h2>;
  return (
    <div>
      <NewGenericBuildingBlockPage />
    </div>
  );
};

export default NewGenericBuildingBlock;
