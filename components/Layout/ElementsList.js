import styles from '../../components/Layout/ElementsList.module.css';

import React from 'react';

const ElementsList = ({ children }) => {
  return <div className={styles.listDisplay}>{children}</div>;
};

export default ElementsList;
