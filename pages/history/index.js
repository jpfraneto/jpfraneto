import React from 'react';
import Link from 'next/link';
import lifeTimeline from '../../data/life-timeline.json';
import HistoryMain from '../../components/History/HistoryMain';

const HistoryPage = () => {
  console.log('the life timeline object is: ', lifeTimeline);
  return (
    <div>
      <HistoryMain timeline={lifeTimeline} />
      <Link href='/menu'>
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default HistoryPage;
