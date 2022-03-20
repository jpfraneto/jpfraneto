import React from 'react';
import Link from 'next/link';

const HistoryPage = () => {
  return (
    <div>
      Here goes the page with my history
      <Link href='/'>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default HistoryPage;
