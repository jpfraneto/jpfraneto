import React from 'react';
import styles from './Rudra.module.css';
import Link from 'next/link';

const Rudra = () => {
  const rudraElements = [
    { slug: 'modulo1', title: 'Módulo 1: Introduction', description: '' },
    { slug: 'modulo2', title: 'Módulo 2: Conociendo al ser', description: '' },
    { slug: 'modulo3', title: 'Módulo 3: Profundizando ', description: '' },
    {
      slug: 'modulo4',
      title: 'Módulo 4: Elevando la kundalini',
      description: '',
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <h1>Formación Yóguica Rudra 2021-2022</h1>
      <p>
        On 2019 I realized that I wanted to develop myself into the two key
        skills that I want my life to circle about: Programming and Meditation.
      </p>
      <p>
        Wanting to deepen my Meditation practice I ended up in a teaching course
        for becoming a Kundalini Yoga teacher.{' '}
      </p>
    </div>
  );
};

export default Rudra;
