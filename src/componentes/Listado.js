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

const customDataCafeteria = require('../../cafeteria.json');

export default function Listado({id, navigation}) {
 
  const {cafeteria, listadoCafeteriasOriginal, setLocal, setCafeteria, idCafeteria, setIdCafeteria} =
    useContext(AppContext);


  
  /*useEffect(() => {
    
     
        try {
          let peticion = await fetch("poner la api correspondiente/${id}");
          let res = await peticion.json();
          setCafeteria(res);
          
        } catch (error) {
          console.error(error);
        }
      
   
  }, []); */
  if(cafeteria) {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={styles.contenedorListado}>
            <View
              style={styles.contenedorNavbarDelListado}>
              <Navbar />
            </View>
            <View>
              <SliderBox
                images={[
                  'https://mexicorutamagica.mx/wp-content/uploads/2021/06/cafeterias-mas-famosas-del-mundo.jpg',
                  'https://www.nestleprofessional.es/sites/g/files/gfb231/f/styles/cover/public/media/cafeterias_tercera_generacion-cabecera.png?itok=SVLjZhwT',
                  'https://dosg.net/wp-content/uploads/2018/03/cafeteria.jpg',
                ]}
                style={styles.carrusel}
                autoplay={true}
                circleLoop={true}
              />
            </View>
            <View
              style={styles.contenedorListadoProductos}>
              <View>
                <View
                  style={styles.contenedorListadoCafe}>
                  <View style={styles.contenedorTextoTituloListado}>
                    <Text style={{fontSize: 20}}>CAFÉ</Text>
                  </View>
                  <View
                    style={styles.contenedorCardListadoCafe}>
                    {cafeteria.productos.cafe.datos.map(cafe => {
                      return (
                        <View
                          style={styles.contenedorInfoCafe}>
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
                style={styles.contenedorDelTituloDelListadoDeJugos}>
                <View style={styles.contenedorTextoTituloListado}>
                  <Text style={{fontSize: 20}}>JUGOS</Text>
                </View>
  
                <View
                  style={styles.contenedorCardListadoCafe}>
                  {cafeteria.productos.bebidas.datos.map(bebida => {
                    return (
                      <View
                        style={styles.contenedorInfoCafe}>
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
                style={styles.contenedorDelTituloDelListadoDeJugos}>
                <View style={styles.contenedorTextoTituloListado}>
                  <Text style={{fontSize: 20}}>DULCES</Text>
                </View>
  
                <View
                  style={styles.contenedorCardListadoCafe}>
                  {cafeteria.productos.comestibles.datos.map(comida => {
                    return (
                      <View
                        style={styles.contenedorInfoCafe}>
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
  
}
