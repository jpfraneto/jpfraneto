import React from 'react';
import styles from './BookCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BookDisplay = ({ book }) => {
  return (
    <div className={styles.bookItem}>
      <Link href={`/bookshelf/${book.id}`}>
        <Image src={book.image} height={300} width={200} />
      </Link>
    </div>
  );
};

export default BookDisplay;
