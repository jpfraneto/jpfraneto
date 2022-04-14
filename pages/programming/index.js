import React from 'react';
import styles from './styles.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import { allProgrammingProjects } from 'contentlayer/generated';
import Link from 'next/link';
import ElementsList from '../../components/Layout/ElementsList';

export async function getStaticProps() {
  console.log('the projects are: ', allProgrammingProjects);
  return { props: { projects: allProgrammingProjects } };
}

const Programming = ({ projects }) => {
  console.log('in here and the projects are: ', projects);
  return (
    <PageLayout>
      <h1>Programming</h1>
      <h2>
        As the Covid-19 pandemic started, I realized that I wanted to learn how
        to code so that I could be useful for the whole world, building into a
        reality the ideas that I had in my mind. This is where I will share what
        I have learned.
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
  );
};

export default Programming;
