import React from 'react';
import styles from './ContentLayout.module.css';
import LinkedButton from '../Utils/LinkedButton';
import { useRouter } from 'next/router';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXProvider } from '@mdx-js/react';

const components = {
  em: props => <i {...props} />,
};

const ContentLayout = ({ content }) => {
  const Component = useMDXComponent(content.body.code);
  if (!content) return <p>Loading...</p>;
  return (
    <article className={styles.contentContainer}>
      <h1>{content.title}</h1>
      <h3>
        Posted in{' '}
        {content.tags.split(',').map(x => (
          <span className={styles.tag}>{x}</span>
        ))}
      </h3>
      <h5>Estimated Reading Time: {content.estimatedReadingTime} minutes</h5>
      <div dangerouslySetInnerHTML={{ __html: content.body.raw }} />
    </article>
  );
};

export default ContentLayout;
