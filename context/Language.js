import { createContext } from 'react';

const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

export default LanguageContext;
