import React from 'react';
import components from '../../../components/MDXcomponents';
import ProjectLayout from 'layouts/project';
import { allProgrammingProjects } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allProgrammingProjects.map(project => {
    return { params: { slug: project.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisProject = allProgrammingProjects.filter(
    x => x.slug === params.slug
  );
  return { props: { project: JSON.parse(JSON.stringify(thisProject[0])) } };
}

export default function ProgrammingProjectPage({ project }) {
  const Component = useMDXComponent(project.body.code);
  return (
    <ProjectLayout content={project}>
      <Component components={{ ...components }} />
    </ProjectLayout>
  );
}
