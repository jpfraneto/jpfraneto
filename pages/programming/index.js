import React from 'react';
import styles from './styles.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import { allProgrammingProjects } from 'contentlayer/generated';
import Link from 'next/link';
import Head from 'next/head';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  return { props: { projects: allProgrammingProjects } };
}

const Programming = ({ projects }) => {
  return (
    <>
      <Head>
        <title>· jp · programming</title>
      </Head>{' '}
      <PageLayout>
        <h1>Programming</h1>
        <h2>
          As the Covid-19 pandemic started, I realized that I wanted to learn
          how to code so that I could be useful for the whole world, building
          into a reality the ideas that I had in my mind. This is where I will
          share what I have learned. More than what I have learned, it is where
          I share what I have created. The learning process is something
          unconscious that manifests itself every time I sit down and do the
          work.
        </h2>
        <ElementsList>
          {projects.map(project => {
            return (
              <Link href={`/programming/projects/${project.slug}`}>
                <a>{project.name}</a>
              </Link>
            );
          })}
        </ElementsList>
      </PageLayout>
    </>
  );
};

export default Programming;
