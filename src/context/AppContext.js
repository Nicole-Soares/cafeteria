import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

const customData = require('../../locales.json');
const customDataProducto = require('../../producto.json');
const customDataCafeterias = require("../../cafeteria.json");

console.log(customData);
export default function AppProvider({children}) {
  const [listadoCafeteriasOriginal, setlistadoCafeteriasOriginal] =
    useState(customData);
  const [locales, setLocales] = useState(customData);
  const [infoCafe, setInfoCafe] = useState(customDataProducto);
  const [cafeteria, setCafeteria] = useState(customDataCafeterias);


  return (
    <AppContext.Provider
      value={{
        listadoCafeteriasOriginal,
        setlistadoCafeteriasOriginal,
        locales,
        setLocales,
        infoCafe,
        setInfoCafe,
        cafeteria, setCafeteria
      }}>
      {children}
    </AppContext.Provider>
  );
}
