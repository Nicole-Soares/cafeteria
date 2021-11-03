import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuUsuario({navigation}) {
  return (
    <View
      style={{
        borderColor: '#D5D6D6',
        borderWidth: 2,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:"#729C81"
      }}>
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" color="#D8DCD9" size={30} />
      </TouchableOpacity>
      <Icon name="shopping-basket" color="#D8DCD9" size={30} />
      <TouchableOpacity onPress={() => navigation.navigate('SesionScreen')}>
        <Icon name="user" color="#D8DCD9" size={30} />
      </TouchableOpacity>
    </View>
  );
}
