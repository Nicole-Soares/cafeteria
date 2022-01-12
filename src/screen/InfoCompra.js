import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuUsuario from '../componentes/MenuUsuario';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InfoCompra(props) {
  const {orden, setOrden} = useContext(AppContext);

  /*useEffect(() => {
    let idParam = props.id|| props.route.params.id;
   async function ObtenerDataCompraDetallada(){
       try{
        let peticion = await fetch("${idParam}")
        let respuesta = await peticion.json()
        setOrden(respuesta)
       }
      catch(error){
          console.error(error)
      }
   }
}, []) */

  return (
    <View style={{alignItems: 'center', flex: 1, width: '100%'}}>
      <View  style={{
              backgroundColor: '#729C81',
              justifyContent: 'center',
              alignItems: 'center',
              width:"100%",
              height:"20%"
            }}>
              <View style={{justifyContent:"flex-start", width:"100%", alignContent:"flex-start", height:"40%"}}>
                <TouchableOpacity onPress={props.navigation.navigate("SesionScreen")}>
                <Icon name="arrow-left" color="white" size={20}/>
                </TouchableOpacity>
            
              </View>
              <View style={{height:"60%"}}>
              <Text style={{color:"white", fontSize:25, letterSpacing:1}}>Detalle de las compras</Text>
              </View>
        
      </View>
      <ScrollView>
        <View>
          {orden.length > 0 ? (
            orden.map(item => {
              return (
                <View
                  style={{
                    width: 400,
                    marginTop: 10,

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
                     <Text style={{fontSize: 15, fontFamily: 'EncodeSans-Bold', marginLeft:20}}>
                    Nombre
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-regular', marginLeft:20}}>
                    {item.nombre}
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-Bold', marginLeft:20}}>
                   Descripcion
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-regular', marginLeft:20}}>
                    {item.descripcion}
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-Bold', marginLeft:20}}>
                   Cantidad
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-regular', marginLeft:20}}>
                    {item.cantidad}
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-Bold', marginLeft:20}}>
                    Total
                  </Text>
                  <Text style={{fontSize: 15, fontFamily: 'EncodeSans-regular', marginLeft:20}}>
                    $ {item.total}
                  </Text>
                </View>
              );
            })
          ) : (
            <View>
              <Text>no se encuentran los productos</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.contenedorMenuUsuario}>
        <MenuUsuario navigation={props.navigation} />
      </View>
    </View>
  );
}
