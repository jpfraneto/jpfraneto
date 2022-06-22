import React from 'react';
import styles from './EthSol.module.css';
import Link from 'next/link';

const EthSol = () => {
  const ethsolElements = [
    { slug: 'introduction', title: 'Introduction', description: '' },
  ];
  return (
    <div className={styles.mainContainer}>
      <h1>Ethereum and Solidity: The Complete Developer's Guide</h1>
      <p>Learning about the future of the web.</p>

      <div>
        {ethsolElements.map(x => (
          <div>
            <Link
              href={`/education/ethereum-solidity-complete-developers-guide/${x.slug}`}
            >
              <a>{x.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthSol;
