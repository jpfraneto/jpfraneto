import React from 'react';
import Link from 'next/link';
import EducationMain from '../../components/Education/EducationMain';
import { allEducationLogs } from 'contentlayer/generated';

export async function getStaticProps() {
  return { props: { logs: allEducationLogs } };
}

const EducationPage = ({ logs }) => {
  return (
    <>
      <EducationMain logs={logs} />
    </>
  );
};

export default EducationPage;
