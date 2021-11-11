import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../componentes/Navbar';
import MenuUsuario from '../componentes/MenuUsuario';
import {SliderBox} from 'react-native-image-slider-box';
import {AppContext} from '../context/AppContext';
import {ScrollView} from 'react-native-gesture-handler';
import Cafe from '../componentes/Cafe';
import Jugo from '../componentes/Jugo';

const customData = require('../../cafeteria.json');

export default function LocalScreen({id, navigation}) {
  const [cafeteria, setCafeteria] = useState(customData);

  const {listadoCafeteriasOriginal} = useContext(AppContext);

  /*useEffect(() => {
    
     
        try {
          let peticion = await fetch("poner la api correspondiente/${id}");
          let res = await peticion.json();
          setCafeteria(res);
          
        } catch (error) {
          console.error(error);
        }
      
   
  }, []); */

  return (
    <ScrollView stickyHeaderIndices={[10]}>
      <View style={{backgroundColor: '#F9F0E1', height: '100%', width:"100%"}}>
        <View
          style={{
            backgroundColor: '#729C81',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Navbar />
        </View>
        <View>
          <SliderBox
            images={[
              require('../assets/imagenes/imagen-perfil.jpg'),
              require('../assets/imagenes/gatito.jpg'),
            ]}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              width: 340,
              height: 150,
              marginTop: 50,
            }}
            autoplay={true}
            circleLoop={true}
          />
        </View>
         <View style={{borderColor:"pink", borderWidth:2, height:"100%", justifyContent:"space-around"}}>
        <View>
        <View
          style={{
          
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={{width: '90%', marginBottom: 10}}>
            <Text style={{fontSize: 20}}>CAFÉ</Text>
          </View>
          <View
            style={{
              width: '90%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
              borderColor:"pink",
              borderWidth:2,
              justifyContent:"space-around",
             
            }}>
            {cafeteria.productos.cafe.datos.map(cafe => {
              return (
                <View
                  style={{
                    justifyContent: 'space-between',
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                 
                    borderColor:"pink",
                    borderWidth:2
                  }}>
                 <Cafe imagen={cafe.imagen} nombre={cafe.nombre} puntaje={cafe.puntaje} precio={cafe.precio}/>
                 </View>
              );
            })}
          </View>
        </View>
       
         
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={{width: '90%', marginBottom: 10}}>
            <Text style={{fontSize: 25}}>Jugos</Text>
          </View>
         <TouchableOpacity>
          <View
            style={{
              width: "85%",
              backgroundColor: 'white',
              justifyContent: 'center',
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
            {cafeteria.productos.bebidas.datos.map(bebida => {
              return (
                <View
                  style={{
                    justifyContent: 'space-between',
                    width: '90%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    marginBottom:15
                  }}>
                    <Jugo nombre={bebida.nombre} precio={bebida.precio} puntaje={bebida.puntaje} imagen={bebida.imagen}/>
                </View>
              );
            })}
          </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
            <View style={{width: '90%', marginBottom: 10}}>
            <Text style={{fontSize: 25}}>Dulces</Text>
            </View>
         
          <View style={{
              width: '83%',
              backgroundColor: 'white',
              justifyContent: 'center',
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
            
           
            {cafeteria.productos.comestibles.datos.map(comida => {
              return (
                <View
                style={{
                  justifyContent: 'space-between',
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                  <TouchableOpacity>
                    <View >
                      
                    <Image
                      source={{uri: comida.imagen}}
                      style={{height: 80, width: 80, borderRadius: 5}}
                    />
                  </View>
                  <View>
                  <View>
                    <Text style={{fontSize: 20}}>{comida.nombre.toUpperCase()}</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 15, color:"gold"}}>$ {comida.precio}</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 15, color:"green"}}>{comida.puntaje}</Text>
                  </View>
                  </View>
                  
                  </TouchableOpacity>
                </View>
                
              );
            })}
            
          </View>
         
        </View>
        </View>
        <View
          style={{borderColor:"pink", borderWidth:2, width: '100%'}}>
          <MenuUsuario navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}
