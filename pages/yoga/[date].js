import React from 'react';
import { allYogaLogs } from 'contentlayer/generated';
import components from 'components/MDXComponents';
import YogaLayout from 'layouts/yoga';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function getStaticPaths() {
  console.log('in here, all', allYogaLogs);
  const paths = allYogaLogs.map(log => {
    return { params: { date: log.date } };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const log = allYogaLogs.find(log => {
    return log.date === params.date;
  });
  return { props: { log } };
}

export default function Yoga({ log }) {
  const Component = useMDXComponent(log.body.code);
  return (
    <YogaLayout content={log}>
      <Component components={{ ...components }} />
    </YogaLayout>
  );
}
