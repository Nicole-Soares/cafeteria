import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';
import Producto from './Producto';

export default function CategoriaCafe(props) {
  const {cafeteria} = useContext(AppContext);
  const {id} = useContext(AppContext);




  return (
    <View style={styles.contenedorCafe}>
      <View style={styles.contenedorTextoTituloListado}>
        <Text style={{fontSize: 20}}>{props.nombre}</Text>
      </View>

      {cafeteria.categorias.map(categoria => {
        if (categoria.nombre === props.nombre) {
          return (
            <View style={styles.contenedorCardListadoCafe}>
              {categoria.consumibles.map(consumible => {
                return (
                  <View style={styles.contenedorInfoCafe}>
                    <Producto
                      idProducto= {consumible.id}
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
          );
        }
      })}
    </View>
  );
}
