import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from './Navbar';
import {SliderBox} from 'react-native-image-slider-box';
import Cafe from './Cafe';
import Jugo from './Jugo';
import Dulce from './Dulce';
import {AppContext} from '../context/AppContext';
import MenuUsuario from './MenuUsuario';
import {styles} from '../theme/Style';

const customData = require('../../cafeteria.json');

export default function Listado({id, navigation}) {
  const {cafeteria, listadoCafeteriasOriginal, setLocal} = useContext(AppContext);

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
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{backgroundColor: '#F2F1F1', height: '100%', width: '100%'}}>
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
                'https://mexicorutamagica.mx/wp-content/uploads/2021/06/cafeterias-mas-famosas-del-mundo.jpg',
                'https://www.nestleprofessional.es/sites/g/files/gfb231/f/styles/cover/public/media/cafeterias_tercera_generacion-cabecera.png?itok=SVLjZhwT',
                'https://dosg.net/wp-content/uploads/2018/03/cafeteria.jpg',
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
              marginTop: 10,
              height: '100%',
              width: '100%',
            }}>
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

                    justifyContent: 'space-around',
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
                          marginBottom: 15,
                        }}>
                        <Cafe
                          id={cafe.id}
                          imagen={cafe.imagen}
                          nombre={cafe.nombre}
                          puntaje={cafe.puntaje}
                          precio={cafe.precio}
                          navigation={navigation}
                        />
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
                <Text style={{fontSize: 20}}>JUGOS</Text>
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
                        marginBottom: 15,
                      }}>
                      <Jugo
                      id={bebida.id}
                        nombre={bebida.nombre}
                        precio={bebida.precio}
                        puntaje={bebida.puntaje}
                        imagen={bebida.imagen}
                        navigation={navigation}
                      />
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
                <Text style={{fontSize: 25}}>DULCES</Text>
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
                      <Dulce
                      id={comida.id}
                        nombre={comida.nombre}
                        precio={comida.precio}
                        imagen={comida.imagen}
                        puntaje={comida.puntaje}
                        navigation={navigation}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.contenedorMenuUsuario}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
  );
}
