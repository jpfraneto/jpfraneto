import React from 'react';
import styles from './ContentLayout.module.css';
import LinkedButton from '../Utils/LinkedButton';
import { useRouter } from 'next/router';

const ContentLayout = ({ children }) => {
  if (!children) return <p>Loading...</p>;
  return <div className={styles.contentContainer}>{children}</div>;
};

export default ContentLayout;
