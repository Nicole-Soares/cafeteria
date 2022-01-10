import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Navbar from './Navbar';
import {SliderBox} from 'react-native-image-slider-box';
import CategoriaBebidas from './CategoriaBebidas';
import CategoriaCafe from './CategoriaCafe';
import CategoriaConsumibles from './CategoriaConsumibles';
import CategoriaTop from './CategoriaTop';
import {AppContext} from '../context/AppContext';
import MenuUsuario from './MenuUsuario';
import {styles} from '../theme/Style';



export default function Listado(props) {
  const {
    cafeteria,
    setCafeteriaListadoOriginal,
    setLocal,
    setCafeteria,
    idCafeteria,
    setIdCafeteria,
    cafes,
    jugos,
    dulces,
    top,
  } = useContext(AppContext);

  const {id, setId} = useContext(AppContext);




  useEffect(() => {
    async function obtenerCafeteria() {
      try {
        let idParam = props.id || props.route.params.id;
        setId(idParam);
        let peticion = await fetch(
          `http://vps-2290673-x.dattaweb.com/api/cafeterias/${idParam}/`,
        );
        let res = await peticion.json();
        setCafeteria(res);
        setCafeteriaListadoOriginal(res);
      } catch (error) {
        console.error(error);
      }
    }
    obtenerCafeteria();
  }, []);

  if (cafeteria) {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contenedorListado}>
            <View style={styles.contenedorNavbarDelListado}>
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
            <View style={styles.contenedorListadoProductos}>
              {cafes ? (
                <CategoriaCafe navigation={props.navigation} nombre="Café" />
              ) : (
                <Text style={{display: 'none'}}></Text>
              )}
              {jugos ? (
                <CategoriaBebidas
                  navigation={props.navigation}
                  nombre="Adicionales"
                />
              ) : (
                <Text style={{display: 'none'}}></Text>
              )}
              {dulces ? (
                <CategoriaConsumibles
                  navigation={props.navigation}
                  nombre="Otros"
                />
              ) : (
                <Text style={{display: 'none'}}></Text>
              )}
              {top ? (
                <CategoriaTop navigation={props.navigation} nombre="top" />
              ) : (
                <Text style={{display: 'none'}}></Text>
              )}
            </View>
          </View>
        </ScrollView>

        <View style={styles.contenedorMenuUsuario}>
          <MenuUsuario navigation={props.navigation} />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
}
