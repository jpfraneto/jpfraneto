import Router from 'next/router';
import React, { useState } from 'react';
import styles from './NewSadhana.module.css';
import { useRouter } from 'next/router';

const NewSadhana = () => {
  const router = useRouter();
  const [newSadhana, setNewSadhana] = useState({ periodicity: 'days' });

  const handleChange = e => {
    setNewSadhana(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addSadhanaToDB = async e => {
    e.preventDefault();
    if (
      !newSadhana.title &&
      !newSadhana.description &&
      !newSadhana.slug &&
      !newSadhana.motivation &&
      !newSadhana.scheduledDate &&
      !newSadhana.targetDuration
    )
      return alert('Please fill every part of the form!');
    newSadhana.buildingBlocks = [];
    newSadhana.active = false;
    newSadhana.completed = false;
    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newSadhana,
      }),
    };
    const response = await fetch('/api/sadhanas', reqParams);
    const data = await response.json();
    if (data.response.success) {
      router.push(`/sadhana-life/${data.response._id}`);
    }
  };

  return (
    <div className={styles.newSadhanaContainer}>
      <h1>New Sadhana</h1>
      <form className={styles.newSadhanaForm} onSubmit={addSadhanaToDB}>
        <div>
          <label>Title:</label>
          <input onChange={handleChange} name='title' placeholder='T I T L E' />
        </div>
        <div>
          <label>Slug:</label>
          <input onChange={handleChange} name='slug' placeholder='S L U G' />
        </div>
        <div>
          <label>One Liner Goal:</label>
          <input onChange={handleChange} name='goal' placeholder='G O A L' />
        </div>
        <div>
          <label>Motivational Video Link:</label>
          <input onChange={handleChange} name='video' placeholder='V I D E O' />
        </div>
        <div>
          <label>
            Description (What other people will read to understand what you are
            doing):
          </label>
          <textarea
            onChange={handleChange}
            name='description'
            placeholder='D E S C R I P T I O N'
          />
        </div>
        <div>
          <label>
            Motivation (What you will read every day when it feels hard to do
            it):
          </label>
          <textarea
            onChange={handleChange}
            name='motivation'
            placeholder='M O T I V A T I O N'
          />
        </div>
        <div>
          <label>Which is the target starting date?</label>
          <input
            type='date'
            name='scheduledDate'
            id='datePicker'
            onChange={handleChange}
            placeholder='D A T E'
          />
        </div>
        <div>
          <label>Which is the durations periodicity?</label>
          <select name='periodicity' onChange={handleChange}>
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
          </select>
        </div>
        <div>
          <label>
            How many of them will happen until you are complete with your
            mission?
          </label>
          <input
            type='number'
            name='targetDuration'
            onChange={handleChange}
            min={0}
            step='1'
            placeholder='T A R G E T - D U R A T I O N'
          />
        </div>
        <div>
          <label>Tags (Comma Separated Values)</label>
          <input onChange={handleChange} name='tags' placeholder='T A G S' />
        </div>

        <div>
          <label>Image:</label>
          <input name='image' placeholder='I M A G E' onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewSadhana;
