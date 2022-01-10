import React from 'react';
import {createContext, useState} from 'react';

export const AppContext = createContext({});

const customData = require('../../locales.json');
const customDataProducto = require('../../producto.json');
const customDataCafeteria = require('../../cafeteria.json');
const customDataOrden = require("../../orden.json");
const customDataHistorial = require("../../historial.json");

export default function AppProvider({children}) {
  const [listadoCafeteriasOriginal, setlistadoCafeteriasOriginal] = useState(
    [],
  );
  const [locales, setLocales] = useState([]);
  const [infoCafe, setInfoCafe] = useState(null);
  const [listadoOriginalProductos, setListadoOriginalProductos] = useState([]);
  const [cafeteriaListadoOriginal, setCafeteriaListadoOriginal] =
    useState(null);
  const [cafeteria, setCafeteria] = useState(null);
  const [seleccionado, setSeleccionado] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [listadoOriginalPedidos, setListadoOriginalPedidos] = useState([]);
  const [idCafeteria, setIdCafeteria] = useState({});
  const [cafes, setCafes] = useState(false);
  const [jugos, setJugos] = useState(false);
  const [dulces, setDulces] = useState(false);
  const [top, setTop] = useState(true);
  const [id, setId] = useState(null);
  const [usuarioOn, setUsuarioOn] = useState(false);
  const [orden, setOrden] = useState(customDataOrden);
 const [historial, setHistorial] = useState([]);
 const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
 const [idSeleccion, serIdSeleccion] = useState([]);
 
  return (
    <AppContext.Provider
      value={{
        listadoCafeteriasOriginal,
        setlistadoCafeteriasOriginal,
        locales,
        setLocales,
        infoCafe,
        setInfoCafe,
        cafeteria,
        setCafeteria,
        seleccionado,
        setSeleccionado,
        listadoOriginalProductos,
        setListadoOriginalProductos,
        pedidos,
        setPedidos,
        idCafeteria,
        setIdCafeteria,
        cafes,
        setCafes,
        jugos,
        setJugos,
        dulces,
        setDulces,
        top,
        setTop,
        cafeteriaListadoOriginal,
        setCafeteriaListadoOriginal,
        id,
        setId,
        usuarioOn,
        setUsuarioOn,
        orden, setOrden,
        historial, setHistorial,
        listadoOriginalPedidos, setListadoOriginalPedidos,
        horarioSeleccionado, setHorarioSeleccionado,
        idSeleccion, serIdSeleccion
      }}>
      {children}
    </AppContext.Provider>
  );
}
