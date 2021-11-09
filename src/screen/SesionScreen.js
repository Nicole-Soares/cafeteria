import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MenuUsuario from '../componentes/MenuUsuario';

export default function SesionScreen({navigation}) {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F0E1',
      }}>
      <View
        style={{
          height: 400,
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: '#D5D6D6',
          backgroundColor: '#729C81',
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 2,
        }}>
        <TextInput
          placeholder="Ingresa tu username"
          style={{
            borderWidth: 2,
            borderColor: '#D5D6D6',
            width: '80%',
            marginBottom: 5,
          }}
        />
        <TextInput
          placeholder="Ingresa tu password"
          style={{
            borderWidth: 2,
            borderColor: '#D5D6D6',
            width: '80%',
            marginBottom: 5,
          }}
        />
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#D5D6D6',
            width: 100,
            marginBottom: 5,
            alignItems: 'center',
          }}>
          <Text>Ingresar</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row", width:"60%", justifyContent:"space-around"}}>
         <Text>Sos nuevo?</Text>
         <TouchableOpacity onPress={()=>navigation.navigate("RegistrarseScreen")}>
            <Text style={{color:"white"}}>Registrate</Text>
         </TouchableOpacity>
     </View>
      </View>
     

      <View style={{top: 165, width: '100%'}}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
  );
}
