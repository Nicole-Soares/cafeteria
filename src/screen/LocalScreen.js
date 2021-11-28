import React from 'react';
import {View} from 'react-native';

import MenuUsuario from '../componentes/MenuUsuario';

import Listado from '../componentes/Listado';

export default function LocalScreen({navigation}) {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <Listado navigation={navigation} />
      <View
        style={{
          width: '100%',
          marginTop: 10,
          elevation: 10,
          position: 'absolute',
          top: 715,
        }}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
  );
}
