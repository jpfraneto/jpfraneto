import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { allEducationPages } from 'contentlayer/generated';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PageLayout from '../../components/Layout/PageLayout';
import ElementsList from '../../components/Layout/ElementsList';
import source from '../../data/education/educationSource';

const EducationPage = ({ logs }) => {
  return (
    <>
      <Head>
        <title>· jp · education</title>
      </Head>
      <PageLayout>
        <h1>Education</h1>
        <h2>
          I have travelled an interesting journey of education, and this place
          is for sharing that as a means for understanding what each piece has
          brought into who I am now.
        </h2>
        <ElementsList>
          {source.map((education, index) => {
            return (
              <Link href={`/education/${education.slug}`}>
                <a>{education.title}</a>
              </Link>
            );
          })}
        </ElementsList>
      </PageLayout>
    </>
  );
};

export default EducationPage;
