import React from "react";
import { View, TouchableOpacity,Text, TextInput } from "react-native";
import MenuUsuario from "../componentes/MenuUsuario";

export default function RegistrarseScreen({navigation}){

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





    return(
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
         <TextInput
          placeholder="Volve a ingresar tu password"
          style={{
            borderWidth: 2,
            borderColor: '#D5D6D6',
            width: '80%',
            marginBottom: 5,
          }}
        />
           <TextInput
          placeholder="Ingresar tu email"
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
          }}
          
          >
          <Text>Registrate</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row", width:"70%", justifyContent:"space-around"}}>
         <Text>Estas registrado?</Text>
         <TouchableOpacity onPress={()=>navigation.navigate("SesionScreen")}>
            <Text style={{color:"white"}}>Inicia Sesion</Text>
         </TouchableOpacity>
     </View>
      </View>
     

      <View style={{top: 165, width: '100%'}}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
    )
}