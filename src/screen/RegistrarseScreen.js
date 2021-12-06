import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import MenuUsuario from '../componentes/MenuUsuario';
import { styles } from '../theme/Style';

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
      style={styles.contenedorBotonRegistrarse}>
      <View style={{height: '80%',  justifyContent:"center"}}>
        <View>
          <Text>Nombre</Text>
          <TextInput
           
            style={styles.textInputRegistrarse}
          />
        </View>
        <View>
          <Text>Apellido</Text>
          <TextInput
            style={styles.textInputRegistrarse}
          />
        </View>
        <View>
          <Text>Correo electronico</Text>
          <TextInput
            style={styles.textInputRegistrarse}
          />
        </View>
        <View>
          <Text>Contraseña</Text>
          <TextInput
            style={styles.textInputRegistrarse}
          />
        </View>
        <View>
          <Text>Telefono</Text>
          <TextInput
            style={styles.textInputRegistrarse}
          />
        </View>
        <View >
          <TouchableOpacity
            style={styles.botonRegistrarse}>
            <Text style={{color: 'white'}}>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <View
          style={styles.contenedorRegistrado}>
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
