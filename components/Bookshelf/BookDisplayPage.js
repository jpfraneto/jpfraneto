import React from 'react';
import styles from './BookDisplayPage.module.css';

const BookDisplayPage = ({ book }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>The Infinite Jest - David Foster Wallace [1998]</h1>
      <div className={styles.containersContainer}>
        <div className={styles.notesContainer}>
          <h2>Notes</h2>
          <p>This is a place for adding my notes on the book</p>
        </div>
        <div className={styles.thoughtsContainer}>
          <h2>JP Thoughts</h2>
          <p>This is a place for adding thoughts over the book</p>
        </div>
        <div className={styles.thirdPartyThoughts}>
          <h2>Your Thoughts</h2>
          <p>This is a place for you to add thoughts</p>
        </div>
      </div>
    </div>
  );
};

export default BookDisplayPage;
