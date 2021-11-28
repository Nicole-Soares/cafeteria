import React, {useState, useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {AppContext} from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/Style';
import Dulce from '../componentes/Dulce';
import { NavigationContainer } from '@react-navigation/native';

export default function InfoCafe({id, navigation}) {
  const [cantidad, setCantidad] = useState(0);
  const {infoCafe, setInfoCafe, cafeteria} = useContext(AppContext);
 const [favoritoOn, setFavoritoOn] = useState(false);

  /*useEffect(() => {
    
    async function DataCafe(){
        try {
            let peticion = await fetch('api{id}')
           
            let res = await response.json()
             setInfoCafe(res)
        } catch (err) {
            console.error(err)
        }
    }

    DataCafe()
    
   
}, []) */

  const SumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const RestarCantidad = () => {
    if (cantidad === 0){
      setCantidad(0)
    }
    else{
      setCantidad(cantidad - 1);
    }
    
  };

  return (
    <ScrollView>
    <View style={styles.contenedorAgregarProducto}>
       
      <View style={styles.contenedorImagenPedidoProducto}>
      
     
        <Image source={{uri: infoCafe.imagen}} style={styles.imagenDelPedido} />
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={{elevation:100, zIndex:10,  position:"relative", top:-300}}>
        <TouchableOpacity onPress={()=>navigation.navigate("LocalScreen")}>
          <Icon name="arrow-left" color="white" size={20}/>
        </TouchableOpacity>
        </View>
        <View style={{elevation:100, zIndex:10,  position:"relative", top:-300}}>
        <TouchableOpacity onPress={()=>setFavoritoOn(!favoritoOn)}>
          <Icon name="heart" color={favoritoOn ? "red" : "white"} size={20}/>
        </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={styles.cardDelPedido}>
        <View style={styles.contenedorDeNombreYPrecio}>
          <Text style={styles.textoNombrePedidoDelProducto}>
            {infoCafe.nombre}
          </Text>
          <Text style={styles.textoPrecioDelPedido}>$ {infoCafe.precio}</Text>
        </View>
        <View style={styles.contenedorDescripcionDelPedido}>
          <Text style={styles.textODescripcionDelPedido}>
            {infoCafe.descripcion}
          </Text>
        </View>
        <View style={styles.lineaDelPedido}></View>
        <View style={styles.contenedorCantidadDelProducto}>
          <Text style={styles.textoDeCantidadDelProducto}>CANTIDAD</Text>
          <View style={styles.contenedorDeSumarYRestarProductos}>
            <View>
              <TouchableOpacity onPress={() => SumarCantidad()}>
                <Icon name="plus-circle" size={25} />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{fontSize: 20}}>{cantidad}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => RestarCantidad()}>
                <Icon name="minus-circle" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardDeVariedadesDelPedido}>
        
         
            
              {infoCafe.opciones.map(item => {
                return (
                  <View style={{ alignSelf:"center", width:"95%"}}>
                      <View>
                    <Text style={styles.textoDeCantidadDelProducto}>{item.nombre.toUpperCase()}</Text>
                    </View>
                    <View style={{flexDirection:"row", width:"100%", justifyContent:"space-around"}}>
                      {item.data.map(estado => {
                        return <View ><TouchableOpacity style={{borderWidth:1, borderRadius:8, borderColor:"#F2F2F2", width:"100%", backgroundColor:"#F2F2F2"}}><Text style={{textAlign:"center", fontSize:13,  
                        letterSpacing: 3,}} id={estado.id}>{estado.nombre.toUpperCase()}</Text></TouchableOpacity></View> 
                      })}
                      </View>
                   <View style={styles.lineaDelPedido}></View>
                  </View>
                );
              })}
      
          
        
      </View>

    </View>
    </ScrollView>
  );
}
