import React from 'react';
import styles from './poetry.module.css
';
import PageLayout from '../../components/Layout/PageLayout';

const Poetry = () => {
  return (
    <PageLayout>
      <h1>Poetry</h1>
      <h2>This is the poetry that I have chanelled.</h2>
      <div className={styles.poemContainer}>
        <p>El último poema que escribí,</p>
        <p>Se me sale hasta por los poros.</p>
      </div>
      
    </PageLayout>
  );
};

export default Poetry;
