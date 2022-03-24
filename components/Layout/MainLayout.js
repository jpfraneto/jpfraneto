import React from 'react';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return <div className={styles.mainLayoutContainer}>{children}</div>;
};

export default MainLayout;
