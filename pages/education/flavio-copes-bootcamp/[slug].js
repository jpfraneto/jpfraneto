import React from 'react';
import { allEducationPages } from 'contentlayer/generated';
import components from '../../../components/MDXcomponents';
import EducationLayout from '../../../layouts/education';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  const paths = allEducationPages
    .filter(x => x.universitySlug === 'flavio-copes-bootcamp')
    .map(education => {
      return { params: { slug: education.slug } };
    });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const thisEducationPage = allEducationPages
    .filter(x => x.universitySlug === 'flavio-copes-bootcamp')
    .filter(x => x.slug === params.slug);
  return {
    props: { education: JSON.parse(JSON.stringify(thisEducationPage[0])) },
  };
}

const Slug = ({ education }) => {
  const Component = useMDXComponent(education.body.code);
  return (
    <EducationLayout content={education}>
      <Component components={{ ...components }} />
    </EducationLayout>
  );
};

export default Slug;
