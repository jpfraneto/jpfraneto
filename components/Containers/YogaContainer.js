import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function YogaContainer(props) {
  console.log('the props are.', props);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);
  const { children } = props;
  const meta = {
    title: 'JPFranetovic - Evolving With Yoga',
    description:
      'Developer, Trying to use the technology of yoga as a means of exploration into myself',
    type: 'website',
  };
  return (
    <div>
      <Head>
        <title>
          · jp · yoga · {props.type.toLowerCase()} · {props.date}
        </title>
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
