import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';

export default function SadhanaContainer(props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  const { children, music } = props;
  const meta = {
    title: 'JPFranetovic - Samurai Life',
    description:
      'Developer, Using the power of consistency and perseverance to achieve my goals',
    type: 'website',
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
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
