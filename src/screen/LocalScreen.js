import React from 'react';
import {View} from 'react-native';
import Navbar from '../componentes/Navbar';
import MenuUsuario from '../componentes/MenuUsuario';
import {SliderBox} from 'react-native-image-slider-box';

export default function LocalScreen({navigation}) {
  return (
    <View style={{backgroundColor:'#F9F0E1', height:"100%"}}>
      <View
        style={{
          backgroundColor: '#729C81',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Navbar />
      </View>
      <View>
        <SliderBox
          images={[
            require('../assets/imagenes/imagen-perfil.jpg'),
            require('../assets/imagenes/gatito.jpg'),
          ]}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: 340,
            height: 150,
            marginTop: 50,
          }}
          autoplay={true}
          circleLoop={true}
        />
      </View>

      <View style={{position: 'relative', top: 445, width: '100%'}}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
  );
}
