import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});


const customData = require('../../locales.json');
const customDataProducto = require('../../producto.json');
const customDataCafeteria = require('../../cafeteria.json');

export default function AppProvider({children}) {
  const [listadoCafeteriasOriginal, setlistadoCafeteriasOriginal] =
    useState([]);
  const [locales, setLocales] = useState([]);
  const [infoCafe, setInfoCafe] = useState(null);
  const [listadoOriginalProductos, setListadoOriginalProductos] = useState([])
  const [cafeteriaListadoOriginal, setCafeteriaListadoOriginal] = useState(null);
  const [cafeteria, setCafeteria] = useState(null);
  const [seleccionado, setSeleccionado] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [idCafeteria, setIdCafeteria] = useState({});
  const [cafes, setCafes] = useState(false);
  const [jugos, setJugos] = useState(false);
  const [dulces, setDulces] = useState(false);
  const [top, setTop] = useState(true);
  const [id, setId] = useState(null);
 

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
        cafes, setCafes,
        jugos, setJugos,
        dulces, setDulces,
        top, setTop,
        cafeteriaListadoOriginal, setCafeteriaListadoOriginal,
        id, setId
       
      }}>
      {children}
    </AppContext.Provider>
  );
}
