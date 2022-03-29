import '../styles/globals.css';
import { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import MainLayout from '../components/Layout/MainLayout';
import LanguageContext from '../context/Language';

function App({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState('en');
  return (
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
  );
}

export default App;
