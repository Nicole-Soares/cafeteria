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

export default function Listado(props) {
  const {
    cafeteria,
    listadoCafeteriasOriginal,
    setLocal,
    setCafeteria,
    idCafeteria,
    setIdCafeteria,
  } = useContext(AppContext);

  const [id, setId] = useState(null);
 
  useEffect(() => {
    setId()
    async function obtenerCafeteria() {
      try {
        let idParam = props.id || props.route.params.id;
        setId(idParam)
        let peticion = await fetch(
          `http://vps-2290673-x.dattaweb.com/api/cafeterias/${idParam}/`,
        );
        let res = await peticion.json();
        setCafeteria(res);
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
              {cafeteria.categorias.map(categoria => {
                return (
                  <View style={styles.contenedorDelTituloDelListadoDeJugos}>
                    <View style={styles.contenedorTextoTituloListado}>
                      <Text style={{fontSize: 20}}>{categoria.nombre}</Text>
                    </View>

                    <View style={styles.contenedorCardListadoCafe}>
                      {categoria.consumibles.map(consumible => {
                        return (
                          <View style={styles.contenedorInfoCafe}>
                            <Dulce
                              id={consumible.id}
                              idCafeteria={id}
                              nombre={consumible.nombre}
                              precio={consumible.precio}
                              imagen={consumible.imagen}
                              puntaje={consumible.puntaje}
                              navigation={props.navigation}
                            />
                          </View>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
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
