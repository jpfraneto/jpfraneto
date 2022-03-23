import React from 'react';
import styles from './YearContainer.module.css';

const YearContainer = ({ year, tl }) => {
  return (
    <div>
      <h3>{year}</h3>
      <div>
        {tl.timeline.map((sub, index) => {
          return (
            <div key={index}>
              {' '}
              <div>{sub.title.es}</div>
              <strong>
                <div>{sub.description.es}</div>
              </strong>
              <p>*************</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default YearContainer;
