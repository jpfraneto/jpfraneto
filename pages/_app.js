import '../styles/globals.css';
import { useState, Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../components/Layout/Navbar';
import MainLayout from '../components/Layout/MainLayout';
import LanguageContext from '../context/Language';

function App({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState('en');
  return (
    <Fragment>
      <Head>
        <title>· jp ·</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='The home in the web of Jorge Pablo Franetovic Stocker'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <LanguageContext.Provider
        value={{
          state: { languageSelected },
          setLanguageSelected,
        }}
      >
        <Navbar />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </LanguageContext.Provider>
    </Fragment>
  );
}

export default App;
