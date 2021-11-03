import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

const customData = require('../../locales.json');

console.log(customData)
export default function AppProvider({children}) {
  const [listadoCafeteriasOriginal, setlistadoCafeteriasOriginal] = useState(customData);
  const [locales, setLocales] = useState(customData);


  

  

  return (
    <AppContext.Provider
      value={{listadoCafeteriasOriginal, setlistadoCafeteriasOriginal, locales, setLocales}}>
      {children}
    </AppContext.Provider>
  );
}