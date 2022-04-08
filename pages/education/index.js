import React from 'react';
import Link from 'next/link';
import EducationMain from '../../components/Education/EducationMain';
import { allEducationLogs } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';

export async function getStaticProps() {
  return { props: { logs: allEducationLogs } };
}

const EducationPage = ({ logs }) => {
  return (
    <PageLayout>
      <h1>Education</h1>
      <h2>
        I have travelled an interesting journey of education, and this place is
        for sharing that as a means for understanding what each piece has
        brought into who I am now.
      </h2>
    </PageLayout>
  );
};

export default EducationPage;
