import React from 'react';
import Link from 'next/link';
import lifeTimeline from '../../thoughts/life-timeline.json';
import HistoryMain from '../../components/History/HistoryMain';

const HistoryPage = () => {
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
