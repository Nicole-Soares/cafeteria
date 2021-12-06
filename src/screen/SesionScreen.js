import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MenuUsuario from '../componentes/MenuUsuario';
import { styles } from '../theme/Style';

export default function SesionScreen({navigation}) {
  return (
    <View
      style={styles.contenedorSesion}>
      
        <View style={{height:"80%", justifyContent:"center"}}>
        <View style={{justifyContent:"space-around"}}>
          <Text>Correo electronico</Text>
          <TextInput
            style={styles.textInputSesion}
          />
        </View>
        <View>
          <Text>Contraseña</Text>
          <TextInput
            style={styles.textInputSesionContraseña}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.botonIngresarSesion}>
            <Text style={{color: 'white'}}>Ingresar</Text>
          </TouchableOpacity>
        </View>
         <View>
           <Text>¿Olvidaste tu contraseña?</Text>
         </View>
        <View
          style={styles.contenedorBotonSesionCrearCuenta}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrarseScreen')}
            style={styles.botonCrearCuentaSesion}>
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
