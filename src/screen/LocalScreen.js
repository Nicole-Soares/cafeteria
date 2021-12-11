import React from 'react';
import {View} from 'react-native';

import MenuUsuario from '../componentes/MenuUsuario';

import Listado from '../componentes/Listado';

export default function LocalScreen(props) {




  return (
    <View style={{height: '100%', width: '100%'}}>
      <Listado navigation={props.navigation} id={props.route.params.id} />
    </View>
  );
}
