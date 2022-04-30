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
        Entré a esta formación a partir de unas profundas ganas de querer
        entender mejor la práctica del yoga que estaba llevando a cabo tan
        disciplinadamente. Se hizo necesario para mi complementar la práctica
        con un proceso teórico, para así poder integrar de mejor forma todo el
        conocimiento y avanzar en mi entendimiento de esta hermosa ciencia
        ancestral cuyo objetivo es elevar la conciencia.
      </p>
      <p>
        Voy a ser un referente en el camino de vivir más desde la conciencia, y
        profundizar en esta técnica es el medio para encontrar ese camino.
      </p>
      <div>
        {rudraElements.map(x => (
          <div>
            <Link href={`/education/rudra/${x.slug}`}>
              <a>{x.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rudra;
