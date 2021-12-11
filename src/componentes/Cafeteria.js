import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../context/AppContext';
import { styles } from '../theme/Style';

export default function Cafeteria({
  id,
  nombre,
  descripcion,
  puntaje,
  imagen,
  navigation,
}) {


 
  return (
    <TouchableOpacity
      style={{width: 400, marginTop: 15}}
      onPress={() => navigation.navigate('LocalScreen', {id: id})}>
      <View
        style={styles.contenedorCafeteria}>
        <View>
          <Image style={{width: 70, height: 70}} source={{uri: imagen}} />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontSize: 20, fontFamily: 'EncodeSans-Bold'}}>
            {nombre}
          </Text>
          <Text style={{fontFamily: 'oleoScript-Regular', fontSize: 15}}>
            {descripcion}
          </Text>
        </View>
        <View
          style={styles.contenedorPuntajeYPrecio}>
          <Icon name="star" color="yellow" size={20} />
          <Text>{puntaje}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
