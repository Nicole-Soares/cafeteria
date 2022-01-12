import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuUsuario from '../componentes/MenuUsuario';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';

export default function SesionScreen({navigation}) {
  const [userCorreo, setUserCorreo] = useState(null);
  const [userContraseña, setUserContraseña] = useState(null);
  const {usuarioOn, setUsuarioOn, historial, setUsuario, usuario, setHistorial} = useContext(AppContext);

  /*useEffect(() => {

async function corroborarUsuario(){

  try{
    let peticion = await fetch("lala", {
      method:"POST",
      usuarioCorreo: userCorreo ,
     usuarioContraseña: userContraseña
    })
    .then(function(peticion) {
   if(peticion.ok) {
       setUsuarioOn(true);
   } 

})
    
    
  }
  catch(error){
    console.error(error)
  }
}

corroborarUsuario()
  
}, [])*/

/*useEffect(()=>{
  try{
    let peticion = fetch("lala")
    let respuesta = peticion.json()
    setUsuario(respuesta);
    
  }
  catch(error){
    console.error(error)
  }
}, [])*/


useEffect(() => {
 
  const traerHistorialDelUsuario = async () =>{
    try{
      let peticion =  await fetch("http://vps-2290673-x.dattaweb.com/api/ordenes/1/")
      let respuesta = await  peticion.json()
      setHistorial(respuesta);
     
    }
    catch(error){
      console.error(error)
    }
  }

  
    traerHistorialDelUsuario()
   

}, [])



console.log(historial, "historial")





  if (usuarioOn) {
    return (
      <View style={{justifyContent: 'center',  flex: 1, width:"100%"}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#729C81',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 30, letterSpacing: 1}}>
              Historial de compras
            </Text>
          </View>

          <View style={{alignContent: 'center', width:"90%", marginLeft:40}}>
            {historial.map(cafeteria => {
              return (
                <TouchableOpacity onPress={()=>navigation.navigate("InfoCompra", {id:cafeteria.id})}>
                <View
                  style={{
                    width: '90%',
                    marginTop: 10,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                  }}>
                   
                    <View style={{width:"40%"}}>
                   <Image source={{uri:cafeteria.cafeteria.imagen}} style={{height:100, width:"100%"}}/>
                    </View>
                   
                  <View style={{width: '60%', marginLeft: 10}}>
                   
                      <Text
                        style={{fontSize: 15, fontFamily: 'EncodeSans-Bold'}}>
                        {cafeteria.cafeteria.nombre}
                      </Text>
                      <Text
                        style={{fontSize: 15, fontFamily: 'EncodeSans-Bold'}}>
                        {cafeteria.horario}
                      </Text>
                      <Text
                        style={{fontSize: 15, fontFamily: 'EncodeSans-Bold'}}>
                        {cafeteria.cantidad}
                      </Text>
                      <Text style={{fontSize: 15, color: 'gold'}}>
                        $ {cafeteria.monto_total}
                      </Text>
                  
                  </View>
                 
                </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.contenedorMenuUsuario}>
          <MenuUsuario navigation={navigation} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.contenedorSesion}>
        <View style={{height: '80%', justifyContent: 'center'}}>
          <View style={{justifyContent: 'space-around'}}>
            <Text>Correo electronico</Text>
            <TextInput
              value={userCorreo}
              onChangeText={e => setUserCorreo(e)}
              style={styles.textInputSesion}
            />
          </View>
          <View>
            <Text>Contraseña</Text>
            <TextInput
              value={userContraseña}
              onChangeText={e => setUserContraseña(e)}
              style={styles.textInputSesionContraseña}
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => setUsuarioOn(true)}
              style={styles.botonIngresarSesion}>
              <Text style={{color: 'white'}}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>¿Olvidaste tu contraseña?</Text>
          </View>
          <View style={styles.contenedorBotonSesionCrearCuenta}>
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
}
