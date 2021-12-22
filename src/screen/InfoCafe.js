import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../theme/Style';

import ProductoSelecciones from '../componentes/ProductoSelecciones';

// componente que muestra cuando va a realizar el pedido

export default function InfoCafe(props) {
  const [cantidad, setCantidad] = useState(1);
  const {infoCafe, setInfoCafe, setPedidos, pedidos, listadoOriginalPedidos, setListadoOriginalPedidos} = useContext(AppContext);
  const [ordenItem, setOrdenItem] = useState([]);
  const [selecciones, setSelecciones] = useState([]);
  const {id, setId} = useContext(AppContext);

  useEffect(() => {
    async function DataCafe() {
      let idParam = props.idProducto || props.route.params.idProducto;

      try {
        let peticion = await fetch(
          `http://vps-2290673-x.dattaweb.com/api/consumible/${idParam}/`,
        );

        let res = await peticion.json();
        setInfoCafe(res);
      } catch (err) {
        console.error(err);
      }
    }

    DataCafe();
  }, []);

  /*async function mandarData(){
    try {
      let peticion = await fetch('api{id}')
     
      let res = await response.json()
       
  } catch (err) {
      console.error(err)
  }
 } */

  const SumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const RestarCantidad = () => {
    if (cantidad === 1) {
      setCantidad(1);
    } else {
      setCantidad(cantidad - 1);
    }
  };

  const agregarPedidoYNavigate = () => {
    if (selecciones === []) {
      Alert.alert('Debes seleccionar todas las caracteristicas de tu producto');
    } else {
      pedidos.push({infoCafe, cantidad, selecciones});
      listadoOriginalPedidos.push({infoCafe, cantidad, selecciones})
      setListadoOriginalPedidos(listadoOriginalPedidos)
      setPedidos(pedidos);
      props.navigation.navigate('Listado', {id: props.route.params.id});
    }
  };

  if(infoCafe) {
  return (
    <ScrollView>
      <View style={styles.contenedorAgregarProducto}>
        <View style={styles.contenedorImagenPedidoProducto}>
          <Image
            source={{uri: infoCafe.imagen}}
            style={styles.imagenDelPedido}
          />

          <View
            style={{
              elevation: 100,
              zIndex: 10,
              top: -300,
            }}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('LocalScreen', {
                  id: props.route.params.id,
                })
              }>
              <Icon name="arrow-left" color="#729C81" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardDelPedido}>
          <View style={styles.contenedorDeNombreYPrecio}>
            <Text style={styles.textoNombrePedidoDelProducto}>
              {infoCafe.nombre}
            </Text>
            <Text style={styles.textoPrecioDelPedido}>$ {infoCafe.precio}</Text>
          </View>
          <View style={styles.contenedorDescripcionDelPedido}>
            <Text style={styles.textODescripcionDelPedido}>
              {infoCafe.descripcion}
            </Text>
          </View>
          <View style={styles.lineaDelPedido}></View>
          <View style={styles.contenedorCantidadDelProducto}>
            <Text style={styles.textoDeCantidadDelProducto}>CANTIDAD</Text>
            <View style={styles.contenedorDeSumarYRestarProductos}>
              <View>
                <TouchableOpacity onPress={() => RestarCantidad()}>
                  <Icon name="minus-circle" size={25} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{fontSize: 20}}>{cantidad}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => SumarCantidad()}>
                  <Icon name="plus-circle" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardDeVariedadesDelPedido}>
          {infoCafe.opciones.map(item => {
            return (
              <ProductoSelecciones
                nombre={item.nombre}
                item={item}
                selecciones={selecciones}
                setSelecciones={setSelecciones}
              />
            );
          })}
        </View>
        <View
          style={{
            display: 'flex',
            marginTop: 10,
            width: '90%',
            height: 50,
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#E2E2E2',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            flexDirection: 'row',
          }}>
          <View>
            <Text style={{color: 'gold', fontSize: 20}}>
              {' '}
              $ {infoCafe.precio * cantidad}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => agregarPedidoYNavigate()}
              style={{
                backgroundColor: '#729C81',
                borderRadius: 6,
                height: 30,
                width: 100,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  letterSpacing: 3,
                  color: 'white',
                }}>
                AGREGAR
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
    
} else {
  return (<></>);
}
}
