import React, {useContext, useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {AppContext} from '../context/AppContext';
import Cafeteria from '../componentes/Cafeteria';
import MenuUsuario from '../componentes/MenuUsuario';
import {styles} from '../theme/Style';
import {ScrollView} from 'react-native-gesture-handler';

//muestra el  listado de las cafeterias

export default function HomeScreen({navigation}) {
  const {locales, setLocales,  setlistadoCafeteriasOriginal} = useContext(AppContext);
  const  [error, setError] = useState(null)

  useEffect(() => {
    async function obtenerListadoCafeterias() {
      try {
        let peticion = await fetch(
          'http://vps-2290673-x.dattaweb.com/api/cafeterias/',
        );
        let respuesta = await peticion.json();
        setlistadoCafeteriasOriginal(respuesta);
        setLocales(respuesta);
      } catch (er) {
        console.error(er);
      }
    }
    obtenerListadoCafeterias();
  }, []); 

  return (
    <View style={styles.contenedorHomeScreen}>
      <ScrollView>
        <View style={styles.lineaHomeScreen}></View>

        {locales.length > 0 ? (
          locales.map(cafeteria => {
            return (
              <View style={styles.contenedorCafeteria}>
                <Cafeteria
                  key={cafeteria.id}
                  id={cafeteria.id}
                  nombre={cafeteria.nombre}
                  descripcion={cafeteria.descripcion}
                  puntaje={cafeteria.puntaje}
                  ubicacion={cafeteria.ubicacion}
                  imagen={cafeteria.imagen}
                  navigation={navigation}
                />
              </View>
            );
          })
        ) : (
         
          <ActivityIndicator size="large" color="pink" />
         
        )}
      </ScrollView>
      <View style={styles.contenedorMenuUsuario}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
  );
}
