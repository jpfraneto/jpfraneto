import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  const { children } = props;
  const meta = {
    title: 'JPFranetovic - Inventor',
    description: 'Developer, Trying to educate myself to educate others',
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
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='JP Franetovic' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta name='twitter:site' content='@jpfraneto' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
