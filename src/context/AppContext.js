import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});


const customData = require('../../locales.json');
const customDataProducto = require('../../producto.json');
const customDataCafeteria = require('../../cafeteria.json');

export default function AppProvider({children}) {
  const [listadoCafeteriasOriginal, setlistadoCafeteriasOriginal] =
    useState(customData);
  const [locales, setLocales] = useState(customData);
  const [infoCafe, setInfoCafe] = useState(customDataProducto);
  const [listadoOriginalProductos, setListadoOriginalProductos] = useState(customDataProducto)
  const [cafeteria, setCafeteria] = useState(customDataCafeteria);
  const [seleccionado, setSeleccionado] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [idCafeteria, setIdCafeteria] = useState({});
  const [publishableKey, setPublishableKey] = useState('');
 

  return (
    <AppContext.Provider
      value={{
        listadoCafeteriasOriginal,
        setlistadoCafeteriasOriginal,
        locales,
        setLocales,
        infoCafe,
        setInfoCafe,
        cafeteria, setCafeteria,
        seleccionado, setSeleccionado,
        listadoOriginalProductos, setListadoOriginalProductos,
        pedidos, setPedidos,
        idCafeteria, setIdCafeteria,
        publishableKey, setPublishableKey
      }}>
      {children}
    </AppContext.Provider>
  );
}
