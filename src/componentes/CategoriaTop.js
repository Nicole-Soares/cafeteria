import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';
import Producto from './Producto';

export default function CategoriaTop(props) {
  const {cafeteria} = useContext(AppContext);
  const {id} = useContext(AppContext);

  return (
    <View style={styles.contenedorCafe}>
      <View style={styles.contenedorTextoTituloListado}>
        <Text style={{fontSize: 20}}>Top</Text>
      </View>

      <View style={styles.contenedorCardListadoCafe}>
        {cafeteria.top.map(consumible => {
          return (
            <View style={styles.contenedorInfoCafe}>
              <Producto
                id={consumible.consumible.id}
                idCafeteria={id}
                nombre={consumible.consumible.nombre}
                precio={consumible.consumible.precio}
                imagen={consumible.consumible.imagen}
                puntaje={consumible.consumible.puntaje}
                navigation={props.navigation}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}
