import React from 'react';
import ContentLayout from '../../../components/Layout/ContentLayout';
import { allYogaLogs } from 'contentlayer/generated';
import YogaLayout from '../../../components/Yoga/YogaLayout';

export async function getStaticPaths() {
  const paths = allYogaLogs.map(log => {
    return { params: { date: log.date } };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const log = allYogaLogs.find(log => {
    return log.date === params.date;
  });
  return { props: { log } };
}

// export default function YogaLogPage({ log }) {
//   return <ContentLayout content={log} />;
// }

export default function YogaLogPage({ log }) {
  return <YogaLayout content={log} />;
}
