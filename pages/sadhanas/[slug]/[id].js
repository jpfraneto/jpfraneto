import React from 'react';
import { allSadhanaLogs } from 'contentlayer/generated';
import components from '../../../components/MDXcomponents';
import { sadhanas } from '../../../utils/sadhanas';
import { useMDXComponent } from 'next-contentlayer/hooks';
import SadhanaLayout from 'layouts/sadhana';

export async function getStaticPaths() {
  const paths = allSadhanaLogs.map(log => {
    return { params: { id: log.id, slug: log.sadhanaslug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const log = allSadhanaLogs.find(log => {
    return log.id === params.id;
  });
  return { props: { log } };
}

export default function Sadhana({ log }) {
  const Component = useMDXComponent(log.body.code);
  return (
    <SadhanaLayout content={log}>
      <Component components={{ ...components }} />
    </SadhanaLayout>
  );
}
