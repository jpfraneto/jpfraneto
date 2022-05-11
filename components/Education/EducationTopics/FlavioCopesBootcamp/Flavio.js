import React from 'react';
import styles from './Flavio.module.css';
import Link from 'next/link';

const Flavio = () => {
  const flavioElements = [
    { slug: 'week1', title: 'Week 1: Introduction', description: '' },
    { slug: 'week2', title: 'Week 2: Astro', description: '' },
    { slug: 'week3', title: 'Week 3: Javascript', description: '' },
    { slug: 'week4', title: 'Week 4: NodeJS', description: '' },
    { slug: 'week5', title: 'Week 5: React & NextJS', description: '' },
    {
      slug: 'week6',
      title: 'Week 6: Databases - SQL, PostgreSQL & Prisma',
      description: '',
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <h1>Flavio Copes Bootcamp</h1>
      <p>
        I am part of this space because I want to learn how to be a better
        programmer. It has been a loooong journey for me to educate myself, and
        I have been making my way through by building different project that you
        can find{' '}
        <Link href='/programming'>
          <a style={{ textDecoration: 'none', color: 'yellow' }}>here.</a>
        </Link>
      </p>
      <p>
        But I got to a point on which I needed help from the outside, to see
        different practices in action, to realize how other people do things and
        with that evolve how I do them. I'm also very interested in the future
        of education, and being part of this space lets me better understand
        what is being done in the programming world as an answer to formal
        education. I'm an inmense believer of the power of cohorts, and being in
        this program helps me better understand how do they behave, what I see
        as missing, what can be improved. I'm a cohort creator by nature. A
        community gatherer. This is how to learn how to do it in a way that
        transform the people that engage with it.
      </p>
      <div>
        {flavioElements.map(x => (
          <div>
            <Link href={`/education/flavio-copes-bootcamp/${x.slug}`}>
              <a>{x.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavio;
