import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function PodcastContainer(props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  const { children } = props;
  const meta = {
    title: 'JPFranetovic - Talking to Heal',
    description: 'Human, using the power of words to heal',
    type: 'website',
  };
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://jpfraneto.com${router.asPath}`}
        />
        <link rel='canonical' href={`https://jpfraneto.com${router.asPath}`} />
        <meta property='og:site_name' content='JP Franetovic' />
        <meta property='og:description' content={meta.description} />
        <meta name='twitter:site' content='@jpfraneto' />
      </Head>
      <main>{children}</main>
    </div>
  );
}
