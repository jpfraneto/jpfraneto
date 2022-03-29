import Link from 'next/link';
import React from 'react';
import ContentLayout from '../Layout/ContentLayout';
import { useMDXComponent } from 'next-contentlayer/hooks';

const EducationPageDisplay = ({ ed }) => {
  if (!ed) return <h2>Loading!</h2>;
  const MarkdownComponent = useMDXComponent(ed.body.code);

  return (
    <ContentLayout>
      <h3>{ed.name}</h3>
      <MarkdownComponent />
      <Link href='/education'>
        <a>Go Back</a>
      </Link>
    </ContentLayout>
  );
};

export default EducationPageDisplay;
