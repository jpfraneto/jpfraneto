import React from 'react';
import components from '../../components/MDXcomponents';
import styles from './ChosenPoemDisplay.module.css';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Image from 'next/image';

const ChosenPoemDisplay = ({ poem }) => {
  const Component = useMDXComponent(poem.body.code);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image src={poem.albumImageUrl} width='300' height='300'></Image>
      </div>
      <div className={styles.poemContainer}>
        <Component components={{ ...components }} />
      </div>
    </div>
  );
};

export default ChosenPoemDisplay;
