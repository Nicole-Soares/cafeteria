import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MenuUsuario from '../componentes/MenuUsuario';
import {AppContext} from '../context/AppContext';
import { styles } from '../theme/Style';


//este componente es el mapa que muestra las cafeterias

export default function MapaLocales({navigation}) {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: -34.9214,
    longitude: -57.9544,
    latitudeDelta: 0,
    longitudeDelta: 0.05,
  });

  const {locales} = useContext(AppContext);
  return (
    <View style={{height: '100%'}}>
      <View
        style={styles.contenedorTituloMapa}>
        <Text style={{color: 'white', fontSize: 30}}>Locales</Text>
      </View>
      <View style={{height:"83%"}}>
        <MapView
          loadingEnabled={true}
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
          moveOnMarkerPress={false}
          showsUserLocation
          showsCompass={true}
          showsPointsOfInterest={false}
          provider={PROVIDER_GOOGLE}
          zoomEnabled={true}
          initialRegion={currentPosition}
          mapType="standard"
          style={{height: '100%'}}
          region={{
            latitude: -34.72904,
            longitude: -58.26374,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {locales.map(local => {
            return (
              <Marker
                key={local.id}
                coordinate={{
                  latitude: Number(local.latitud),
                  longitude: Number(local.longitud),
                }}
                pinColor={'red'}
                title={local.nombre}
                onPress={() =>
                  navigation.navigate('InformacionCafeteria', {id: local.id})
                }
                ></Marker>
            );
          })}
        </MapView>
      </View>
      <View >
      <MenuUsuario navigation={navigation}/>
      </View>
      
    </View>
  );
}
