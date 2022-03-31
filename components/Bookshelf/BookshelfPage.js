import React from 'react';
import styles from './BookshelfPage.module.css';
import BookCard from './BookCard';

const books = [
  {
    title: 'The Infinite Jest',
    id: '1243',
    author: 'David Foster Wallace',
    image:
      'https://images.cdn3.buscalibre.com/fit-in/360x360/2e/f6/2ef6567ce4834f2692c555065315363c.jpg',
    color: 'f2e2a5',
  },
  {
    title: 'Qué está haciendo internet con nuestras mentes? Superficiales',
    id: '513413',
    author: 'Nicholas Carr',
    image:
      'http://www.adictosaltrabajo.com/wp-content/uploads/2016/02/internetmentes.jpg',
  },
];

const BookshelfPage = () => {
  return (
    <div className={styles.mainContainer}>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookshelfPage;
