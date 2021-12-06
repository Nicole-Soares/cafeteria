import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';
import CantidadPedidos from './CantidadPedidos';

export default function MenuUsuario({navigation}) {
  const {pedidos, setPedidos} = useContext(AppContext);

  return (
    <View style={styles.contenedorMenuUsuario}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" color="#D8DCD9" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MapaLocales')}>
        <Icon name="map" color="#D8DCD9" size={30} />
      </TouchableOpacity>

      <View>
        <View style={{}}>
          {pedidos.length > 0 ? (
            <CantidadPedidos />
          ) : (
            <Text style={{display: 'none'}}></Text>
          )}
        </View>
        <View style={pedidos.length > 0 ? styles.estiloBotonCarritoConProductos : styles.estiloBotonCarritoSinProductos}>
          <TouchableOpacity onPress={() => navigation.navigate('Orden')}>
            <Icon name="shopping-basket" color="#D8DCD9" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SesionScreen')}>
        <Icon name="user" color="#D8DCD9" size={30} />
      </TouchableOpacity>
    </View>
  );
}
