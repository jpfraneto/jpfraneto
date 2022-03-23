import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Music.module.css';
import Link from 'next/link';

const MusicPage = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchDb = async () => {
      setLoading(true);
      const response = await fetch('/api/music');
      const data = await response.json();
      setLoading(false);
      setAlbums(data);
    };
    handleFetchDb();
  }, []);

  if (albums.length === 0) return <h2>Loading!!</h2>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.albumsContainer}>
        {albums.map(album => (
          <Link href={`/music/album/${album._id}`}>
            <Image
              alt={album.name}
              key={album._id}
              src={album.image}
              className={styles.albumImage}
              width='50px'
              height='50px'
              style={{ margin: '4px', border: 'solid white 3px' }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
