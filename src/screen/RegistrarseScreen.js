import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import MenuUsuario from '../componentes/MenuUsuario';

export default function RegistrarseScreen({navigation}) {
  /*const login = async () => {  
        if (
          password.length < 6 ||
          password === "" ||
          username.length < 6 ||
          username === ""
        ) {
          setError(true);
        } else {
          setError(false);
          try {
            let peticion = await fetch("poner la api correspondiente", {
              method: "POST",
              body: JSON.stringify({
                username: username,
                password: password,
              }),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            let res = await peticion.json();
            setUser(res);
            setLoggedIn(true);
          } catch (error) {
            console.error(error);
          }
        }
      };*/

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{height: '80%',  justifyContent:"center"}}>
        <View>
          <Text>Nombre</Text>
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
          <Text>Apellido</Text>
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
          <Text>Telefono</Text>
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
        <View >
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
            <Text style={{color: 'white'}}>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            height: 40,
            justifyContent: 'space-around',
           
          }}>
          <Text>Estas registrado?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SesionScreen')}>
            <Text style={{color: 'grey'}}>Inicia Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '100%'}}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
  );
}
