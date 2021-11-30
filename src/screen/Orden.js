import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';


/**
 * Este componente se encarga de mostrar todos los pedidos del "carrito"
 */
export default function Orden(props) {
  const {listadoOriginalProductos, pedidos} = useContext(AppContext);

console.log(pedidos)

  if (pedidos) {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#729C81',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{letterSpacing: 2, color: 'white', fontSize: 20}}>
            TU ORDEN
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.cardDelPedido}>
            <View>
              <Text>Detalle</Text>
            </View>
            <View
              style={{
                width: '90%',
                borderWidth: 1,
                alignSelf:"center"
              }}></View>
              <View>
                  {pedidos.infoCafe.map(item => {
                      return(
                        <View>
                        {}
                    </View>
                      )
                  })}
                 
                  <View>
                      <Text>{pedidos.descripcion}</Text>
                  </View>
              </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#729C81',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{letterSpacing: 2, color: 'white', fontSize: 20}}>
            TU ORDEN
          </Text>
        </View>
        <View>
          <Text>No hay orden disponible</Text>
        </View>
      </View>
    );
  }
}
