import React from 'react';
import styles from './styles.module.css';
import PageLayout from '../../components/Layout/PageLayout';
import Link from 'next/link';
import ElementsList from '../../components/Layout/ElementsList';

const Programming = ({ logs }) => {
  return (
    <PageLayout>
      <h1>Programming</h1>
      <h2>
        As the Covid-19 pandemic started, I realized that I wanted to learn how
        to code so that I could be useful for the whole world, building into a
        reality the ideas that I had in my mind. This is where I will share what
        I have learned.
      </h2>
      <ElementsList>
        <a target='_blank' href='https://www.human-music.com'>
          Human-Music
        </a>
        <a target='_blank' href='http://www.theopensourcefactory.com'>
          The Open Source Factory
        </a>
        <a target='_blank' href='http://www.drip-work.app'>
          Drip-Work
        </a>
        <a target='_blank' href='http://www.mamiferas.org'>
          Mamíferas
        </a>
        <a target='_blank' href='https://podcast.human-music.com'>
          Timeless Integration
        </a>
        <a target='_blank' href='https://www.holamila.com'>
          Hola Mila
        </a>

        <a target='_blank' href='https://www.worldsofsound.org'>
          Rudra KY
        </a>
        <a target='_blank' href='https://www.jpfraneto.com'>
          jpfraneto
        </a>
      </ElementsList>
    </PageLayout>
  );
};

export default Programming;
