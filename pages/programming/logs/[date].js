import React from 'react';
import ProgrammingContainer from '../../../components/Containers/SadhanaContainer';
import { allProgrammingLogs } from 'contentlayer/generated';
import ProgrammingLayout from '../../../layouts/programming';
import components from '../../../components/MDXcomponents';

import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allProgrammingLogs.map(log => {
    return { params: { date: log.date } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const log = allProgrammingLogs.find(x => x.date === params.date);
  console.log('the log is: ', log);
  return { props: { log } };
}

const Date = ({ log }) => {
  const Component = useMDXComponent(log.body.code);
  return (
    <ProgrammingLayout content={log}>
      <Component components={{ ...components }} />
    </ProgrammingLayout>
  );
};

export default Date;
