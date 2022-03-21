import React from 'react';
import { useRouter } from 'next/router';
import ContentLayout from '../../../components/Layout/ContentLayout';
import { allProgrammingLogs } from 'contentlayer/generated';

export async function getStaticPaths() {
  const paths = allProgrammingLogs.map(log => {
    return [{ params: { date: log.date } }];
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const log = allProgrammingLogs.find(log => {
    return log.date === `${params.date}`;
  });
  return { props: { log } };
}

export default function ProgrammingLogPage({ log }) {
  return <ContentLayout content={log} />;
}
