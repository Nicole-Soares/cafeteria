import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, Touchable} from 'react-native';
import {AppContext} from '../context/AppContext';
import {styles} from '../theme/Style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MenuUsuario from '../componentes/MenuUsuario';
/**
 * Este componente se encarga de mostrar todos los pedidos del "carrito"
 */
export default function Orden(props) {
  const {
    pedidos,
    id,
    setPedidos,
    listadoOriginalPedidos,
    setListadoOriginalPedidos,
  } = useContext(AppContext);

  /*useEffect(() => {
    async function mandarDatosDeOrden() {
      try {
        let peticion = await fetch('lalala', {
          method: 'POST',
          body: JSON.stringify({
            idUsuario: 1,
            pedidos,
          }),
        });
        let respuesta = peticion.json();
      } catch (err) {
        console.error(error);
      }
    }
    mandarDatosDeOrden(pedidos);
  }, []); */

  const borrarCarrito = () => {
    setPedidos([]);
  };

  const borrarPedido = pedido => {
    let pedidosTemp = pedidos.filter(pedidoActual => pedidoActual !== pedido );
  
    setPedidos(pedidosTemp);
  };

  useEffect(() => {
    const actualizarData = () =>{
        setPedidos(pedidos)
    }
    
    actualizarData();
  }, [pedidos]);



  if (pedidos.length > 0) {
    return (
      <View>
        <ScrollView>
        <View
          style={{
            backgroundColor: '#729C81',
            height: 100,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{height: '100%', justifyContent: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Listado', {id: id})}>
              <Icon name="arrow-left" color="white" size={20} />
            </TouchableOpacity>
          </View>
          <View style={{width: '65%'}}>
            <Text style={{letterSpacing: 2, color: 'white', fontSize: 20}}>
              TU ORDEN
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={styles.cardDelPedido}>
            <View
              style={{
                width: '90%',
              }}>
              <Text
                style={{fontSize: 20, letterSpacing: 2, fontWeight: 'bold'}}>
                Detalle
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                borderWidth: 1,
                borderColor: '#DFDEDE',
                alignSelf: 'center',
              }}></View>

            {pedidos.map((pedido, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    alignItems: 'center',
                    width: '90%',
                  }} key={index}>
                  <View style={{marginBottom: 10}}>
                    <Image
                      source={{uri: pedido.infoCafe.imagen}}
                      style={{height: 80, width: 80}}
                    />
                  </View>
                  <View style={{width: '70%'}}>
                    <View>
                      <Text style={{fontSize: 20, letterSpacing: 1}}>
                        {pedido.infoCafe.nombre}
                      </Text>
                      <Text style={{color: 'gold', fontSize: 20}}>
                        $ {pedido.infoCafe.precio * pedido.cantidad}
                      </Text>
                    </View>
                    <View style={{width: '100%'}}>
                      <Text style={{fontSize: 15, letterSpacing: 1}}>
                        {pedido.selecciones.join(', ')}
                      </Text>
                    </View>
                  </View>
                  <View style={{marginBottom: 20}}>
                    <TouchableOpacity onPress={() => borrarPedido(pedido)}>
                      <Icon name="times" color="grey" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
            height:200
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#729C81',
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => props.navigation.navigate('SeleccionHorario')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                letterSpacing: 3,
                color: 'white',
                padding: 5,
              }}>
              CONFIRMAR
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#729C81',
                height: 50,
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={borrarCarrito}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  letterSpacing: 3,
                  color: 'white',
                  padding: 5,
                }}>
                BORRAR CARRITO
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#729C81',
                height: 50,
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={()=>props.navigation.navigate("Listado", {id: id})}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  letterSpacing: 3,
                  color: 'white',
                  padding: 5,
                }}>
                SEGUIR COMPRANDO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
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
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={{fontSize: 20, letterSpacing: 2, fontWeight: 'bold'}}>
            El carrito esta vacio
          </Text>
        </View>
        <View style={{position: 'absolute', bottom: 0, right: 0, left: 0}}>
          <MenuUsuario navigation={props.navigation} />
        </View>
      </View>
    );
  }
}
