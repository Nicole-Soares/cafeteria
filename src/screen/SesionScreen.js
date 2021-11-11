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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      
        <View style={{height:"80%", justifyContent:"center"}}>
        <View style={{justifyContent:"space-around"}}>
          <Text>Correo electronico</Text>
          <TextInput
            style={{
              borderColor: 'white',
              borderBottomColor: '#D5D6D6',
              borderWidth: 2,
              width: '80%',
              marginBottom: 5,
              width: '100%',
            }}
          />
        </View>
        <View>
          <Text>Contraseña</Text>
          <TextInput
            style={{
              borderColor: 'white',
              borderBottomColor: '#D5D6D6',
              borderWidth: 2,
              width: '80%',
              marginBottom: 5,
              width: '100%',
            }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#729C81',
              borderRadius: 5,
              width: '100%',
              height: 40,
              marginBottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#729C81',
            }}>
            <Text style={{color: 'white'}}>Ingresar</Text>
          </TouchableOpacity>
        </View>
         <View>
           <Text>¿Olvidaste tu contraseña?</Text>
         </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 40,
            marginTop:50
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrarseScreen')}
            style={{
              borderWidth: 2,
              borderColor: '#729C81',
              borderRadius: 5,
              width: 370,
              height: 40,
              marginBottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#729C81',
            }}>
            <Text style={{color: 'white'}}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
        </View>

      <View style={{width: '100%'}}>
        <MenuUsuario navigation={navigation} />
      </View>
      </View>
   
  );
}
