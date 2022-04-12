import React from 'react';
import Link from 'next/link';
import { allEducationPages } from 'contentlayer/generated';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PageLayout from '../../components/Layout/PageLayout';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  console.log('all education pages: ', allEducationPages);
  return { props: { logs: allEducationPages } };
}

const EducationPage = ({ logs }) => {
  const Component = useMDXComponent(logs[0].body.code);
  return (
    <PageLayout>
      <h1>Education</h1>
      <h2>
        I have travelled an interesting journey of education, and this place is
        for sharing that as a means for understanding what each piece has
        brought into who I am now.
      </h2>
      <ElementsList>
        <Component components={{ ...components }} />
      </ElementsList>
    </PageLayout>
  );
};

export default EducationPage;
