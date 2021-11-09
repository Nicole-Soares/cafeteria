import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {AppContext} from '../context/AppContext';
import Cafeteria from '../componentes/Cafeteria';
import MenuUsuario from '../componentes/MenuUsuario';


export default function HomeScreen({navigation}) {
  const {locales} = useContext(AppContext);

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#F9F0E1'}}>
      <View
        style={{
          backgroundColor: '#729C81',
          height: 130,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          
        </View>
        
      {locales.length > 0 ? (
        locales.map(cafeteria => {
          return (
            <View style={{width: '100%', alignItems: 'center'}}>
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
      <View style={{position:"relative", top: 365}}><MenuUsuario navigation={navigation}/></View>
      
    </View>
  );
}
