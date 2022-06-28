import React, { useState } from 'react';
import styles from './AddMusic.module.css';
import AlbumCard from './AlbumCard';

const AddMusic = () => {
  const [newAlbum, setNewAlbum] = useState({});
  const handleChange = e => {
    setNewAlbum(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.addAlbumFormContainer}>
        <h1>Add New Album</h1>
        <form onSubmit={handleFormSubmit} className={styles.addAlbumForm}>
          <input
            type='text'
            name='name'
            placeholder='Album Name'
            onChange={handleChange}
          />
          <input
            type='text'
            name='artist'
            placeholder='Artist'
            onChange={handleChange}
          />
          <input
            type='text'
            name='year'
            placeholder='Album Year'
            onChange={handleChange}
          />
          <input
            type='text'
            name='image'
            placeholder='Album Image Url'
            onChange={handleChange}
          />
          <button type='submit'>Submit Album</button>
        </form>
      </div>
      {newAlbum && <AlbumCard album={newAlbum} />}
    </div>
  );
};

export default AddMusic;
