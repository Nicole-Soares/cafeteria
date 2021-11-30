import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../context/AppContext';

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
      onPress={() => navigation.navigate('LocalScreen', {id})}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          height: 100,
          backgroundColor: 'white',
          borderWidth: 2,
          borderColor: '#E2E2E2',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
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
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: '#E1F980',
            backgroundColor: '#E1F980',
          }}>
          <Icon name="star" color="yellow" size={20} />
          <Text>{puntaje}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
