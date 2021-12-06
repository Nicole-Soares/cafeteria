import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AppContext} from '../context/AppContext';
import Cafeteria from '../componentes/Cafeteria';
import MenuUsuario from '../componentes/MenuUsuario';
import { styles } from '../theme/Style';
import { ScrollView } from 'react-native-gesture-handler';

//muestra el  listado de las cafeterias

export default function HomeScreen({navigation}) {
  const {locales} = useContext(AppContext);

  return (
    <View style={styles.contenedorHomeScreen}>
      <ScrollView>
      <View
        style={styles.lineaHomeScreen}></View>

      {locales.length > 0 ? (
        locales.map(cafeteria => {
          return (
            <View style={styles.contenedorCafeteria}>
              <Cafeteria
                id={cafeteria.id}
                nombre={cafeteria.nombre}
                descripcion={cafeteria.descripcion}
                puntaje={cafeteria.puntaje}
                ubicacion={cafeteria.ubicacion}
                imagen={cafeteria.thumbnail}
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
