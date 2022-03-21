import React from 'react';
import styles from './ContentLayout.module.css';
import LinkedButton from '../Utils/LinkedButton';

const ContentLayout = ({ content }) => {
  return (
    <div className={styles.contentContainer}>
      <h2>{content.title}</h2>
      <div
        className='cl-post-body'
        dangerouslySetInnerHTML={{ __html: content.body.raw }}
      />

      <LinkedButton text='Back' link='/yoga' />
    </div>
  );
};

export default ContentLayout;
