import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { allPodcastPages } from 'contentlayer/generated';
import PageLayout from '../../components/Layout/PageLayout';
import components from '../../components/MDXcomponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import ElementsList from '../../components/Layout/ElementsList';
import styles from './podcast.module.css';

export async function getStaticProps() {
  return { props: { podcastLogs: allPodcastPages } };
}

export default function PodcastLogs({ podcastLogs }) {
  const Component = useMDXComponent(podcastLogs[0].body.code);
  return (
    <div>
      <Head>
        <title>JPcast</title>
      </Head>
      <PageLayout>
        <h1>My Podcast</h1>
        <h2>This is a breathwork session divided in three parts:</h2>
        <div className={styles.podcastImage}>
          <div>
            <h4>Presentation</h4>
            <p>
              On which I will talk about the particular album that I will listen
              in that session and why that one
            </p>
          </div>
          <div>
            <h4>Listening</h4>
            <p>
              On which I will listen to the album doing 31 minutes of breathwork
              and then the rest listen to it integrating what just happened
            </p>
          </div>
          <div>
            <h4>Talking</h4>
            <p>On which I will talk whatever comes to my mind in that moment</p>
          </div>
        </div>
        <ElementsList>
          <Component components={{ ...components }} />
        </ElementsList>
      </PageLayout>
    </div>
  );
}
