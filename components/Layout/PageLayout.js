import React from 'react';
import styles from './PageLayout.module.css';

const components = {
  em: props => <i {...props} />,
};

const ContentLayout = ({ children }) => {
  if (!children) return <p>Loading...</p>;
  return <article className={styles.pageContainer}>{children}</article>;
};

export default ContentLayout;
