import React from 'react';
import NewSadhanaBuildingBlock from '../../../components/SadhanaLife/NewSadhanaBuildingBlock';
import { useRouter } from 'next/router';

const NewBuildingBlockPage = () => {
  const router = useRouter();
  if (router.query.pw !== 'g4vf4v1fdvfdg') return <h2>Invalid password</h2>;
  return (
    <div>
      <NewSadhanaBuildingBlock />
    </div>
  );
};

export default NewBuildingBlockPage;
