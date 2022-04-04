import React, { useState } from 'react';
import styles from '../../styles/NewPodcast.module.css';

const NewPodcast = () => {
  const [response, setResponse] = useState('');
  const [newPod, setNewPod] = useState({
    episodeUrl: 'https://www.youtube.com/watch?v=mUToNt5fWFE',
    date: '042022IV',
    guest: 'Diana Vergara',
    album: {
      title: 'Shivoham',
      author: 'Ankara',
      year: '1998',
      listenUrl:
        'https://open.spotify.com/album/4C1wE7kvtY1Lrkh8WMfyTe?si=71sveMAtSwCMxhE4U9U60A',
      coverImage:
        'https://i.discogs.com/hgdfOLIrDncrp6Okziecko_QqNcQiWAw4mu6B76bfxU/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxOTMy/Mzg5LTE2NDQwNjI5/OTItNTMyNy5qcGVn.jpeg',
    },
  });
  const handleChange = e => {
    setNewPod(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleAlbumChange = e => {
    setNewPod(prev => ({
      ...prev,
      album: { ...prev.album, [e.target.name]: e.target.value },
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!newPod.guestSocialMediaProvider)
      return alert('please add a social media provider!');
    const reqOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPod),
    };
    const response = await fetch('/api/podcast', reqOptions);
    const data = await response.json();
    console.log('the data is: ', data);
    setResponse(data.message);
  };
  return (
    <div>
      {response ? (
        <p>{response}</p>
      ) : (
        <div className={styles.newSadhanaContainer}>
          <h1>New Podcast</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Index:</label>
              <input
                onChange={handleChange}
                name='index'
                value={newPod.index}
                placeholder='INDEX'
              />
            </div>
            <div>
              <label>Guest:</label>
              <input
                onChange={handleChange}
                name='guest'
                value={newPod.guest}
                placeholder='EPISODE GUEST'
              />
            </div>
            <div>
              <label>Guest Social Media:</label>
              <input
                onChange={handleChange}
                name='guestSocialMedia'
                value={newPod.guestSocialMedia}
                placeholder='GUEST SOCIAL MEDIA'
              />
            </div>
            <div>
              <label>Social Media Provider:</label>
              <select onChange={handleChange} name='guestSocialMediaProvider'>
                <option selected='true' value='instagram'>
                  Instagram
                </option>
                <option value='facebook'>Facebook</option>
                <option value='github'>Github</option>
                <option value='twitter'>Twitter</option>
              </select>
            </div>
            <div>
              <label>Date:</label>
              <input
                value={newPod.date}
                onChange={handleChange}
                name='date'
                placeholder='D A T E'
              />
            </div>
            <div>
              <label>Episode Video Link:</label>
              <input
                onChange={handleChange}
                name='episodeUrl'
                value={newPod.episodeUrl}
                placeholder='V I D E O U R L'
              />
            </div>
            <hr />
            <h2>Album Information</h2>
            <div>
              <label>Title</label>
              <input
                onChange={handleAlbumChange}
                name='title'
                value={newPod.album.title}
                placeholder='T I T L E'
              />
            </div>
            <div>
              <label>Author(s)</label>
              <input
                onChange={handleAlbumChange}
                name='author'
                value={newPod.album.author}
                placeholder='A U T H O R'
              />
            </div>{' '}
            <div>
              <label>Year</label>
              <input
                onChange={handleAlbumChange}
                name='year'
                value={newPod.album.year}
                placeholder='Y E A R'
              />
            </div>{' '}
            <div>
              <label>Listen Url</label>
              <input
                onChange={handleAlbumChange}
                name='listenUrl'
                value={newPod.album.listenUrl}
                placeholder='L I S T E N U R L'
              />
            </div>
            <div>
              <label>Cover Image</label>
              <input
                onChange={handleAlbumChange}
                name='coverImage'
                value={newPod.album.coverImage}
                placeholder='C O V E R I M A G E'
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewPodcast;
