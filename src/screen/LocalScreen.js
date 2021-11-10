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
    <ScrollView>
      <View style={{backgroundColor: '#F9F0E1', height: '100%'}}>
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

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={{width: '100%', marginLeft: 20}}>
            <Text style={{fontSize: 25}}>Top 5</Text>
            <View
              style={{
                width: '90%',
                borderWidth: 1,
                borderColor: '#D8DCD9',
              }}></View>
            <Text>Top 5...</Text>
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
            }}>
            {cafeteria.productos.cafe.datos.map(cafe => {
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
                  <View >
                    <Image
                      source={{uri: cafe.imagen}}
                      style={{height: 80, width: 80, borderRadius: 5}}
                    />
                  </View>
                  <View>
                    <View>
                      <Text style={{fontSize: 20}}>
                        {cafe.nombre.toUpperCase()}
                      </Text>
                    </View>

                    <View>
                      <Text style={{fontSize: 15, color: 'gold'}}>
                        $ {cafe.precio}
                      </Text>
                    </View>
                    <View>
                      <Text style={{fontSize: 15, color: 'green'}}>
                        {cafe.puntaje}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text>flecha</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
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
                  }}>
                     <View >
                    <Image
                      source={{uri: bebida.imagen}}
                      style={{height: 80, width: 80, borderRadius: 5}}
                    />
                  </View>
                  <View>
                  <View >
                    <Text style={{fontSize: 20}}>{bebida.nombre.toUpperCase()}</Text>
                  </View>

                  <View>
                    <Text style={{fontSize: 15, color:"gold"}}>$ {bebida.precio}</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 15, color:"green"}}>{bebida.puntaje}</Text>
                  </View>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text>flecha</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
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
            <Text style={{fontSize: 25}}>Dulces</Text>
            </View>
            
          <View style={{
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
            }}>
            
           
            {cafeteria.productos.comestibles.datos.map(comida => {
              return (
                <View
                style={{
                  justifyContent: 'space-between',
                  width: '90%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
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
                  <View>
                    <TouchableOpacity>
                      <Text>flecha</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View
          style={{justifyContent: 'flex-end', height: '35%', width: '100%'}}>
          <MenuUsuario navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}
