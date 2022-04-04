import React, { useState } from 'react';
import styles from './NewGenericBuildingBlockPage.module.css';
import { useRouter } from 'next/router';

const NewGenericBuildingBlockPage = () => {
  const router = useRouter();
  const [newBuildingBlock, setNewBuildingBlock] = useState({});
  const [responseText, setResponseText] = useState('');

  const handleChange = e => {
    setNewBuildingBlock(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addSadhanaBuildingBlockToDB = async e => {
    e.preventDefault();

    const reqParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newBuildingBlock,
      }),
    };
    const response = await fetch('/api/sadhanas/building-blocks ', reqParams);
    const data = await response.json();
    if (data.response.success) {
      return router.push(`/sadhana-life/${router.query.id}`);
    }
    setText(data.response.message);
  };

  return (
    <div className={styles.newSadhanaContainer}>
      {responseText ? (
        <p>{responseText}</p>
      ) : (
        <>
          <h1>Choose the sadhana</h1>
          <select name='sadhanaSelection'>
            <option value='TOSF-Season 1'>TOSF-Season 1</option>
            <option value='Cuarentena SoDarshanChakra Kriya'>
              Cuarentena SoDarshanChakra Kriya
            </option>
          </select>

          <div className={styles.newFormOptionAdder}>
            <h2>Add form option</h2>
            <select>
              <option value='input/text'>Input Text</option>
              <option value='input/number'>Input Number</option>
              <option value='textarea'>Textarea</option>
            </select>
            <button>Add</button>
          </div>

          <form
            className={styles.newSadhanaForm}
            onSubmit={addSadhanaBuildingBlockToDB}
          >
            {/* <div>
              <label>Title:</label>
              <input
                onChange={handleChange}
                name='title'
                placeholder='T I T L E'
              />
            </div>
            <div>
              <label>Video Link:</label>
              <input
                onChange={handleChange}
                name='video'
                placeholder='V I D E O'
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                onChange={handleChange}
                name='description'
                placeholder='D E S C R I P T I O N'
              />
            </div>
            <div>
              <label>
                How do you feel right now with this piece? (From 1 to 100)
              </label>
              <input
                type='number'
                name='feeling'
                onChange={handleChange}
                min={0}
                step='1'
                placeholder='F E E L I N G'
              />
            </div>
            <div>
              <label>What was the duration of this session? (In minutes)</label>
              <input
                type='number'
                name='duration'
                onChange={handleChange}
                min={0}
                step='1'
                placeholder='D U R A T I O N'
              />
            </div>
            <div>
              <label>Other comments:</label>
              <input
                onChange={handleChange}
                name='other'
                placeholder='O T H E R'
              />
            </div> */}

            <button type='submit'>Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewGenericBuildingBlockPage;
