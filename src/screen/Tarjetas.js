import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ProgressBarAndroidComponent,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../context/AppContext';
import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';

export default function Tarjetas({navigation}) {
  const [paymentResult, setPaymentResult] = useState('En espera');
  const {pedidos, id, userCorreo, horarioSeleccionado} = useContext(AppContext);

  const getPreferenceId = async (payer, ...items) => {
    const response = await fetch(
      `https://api.mercadopago.com/checkout/preferences?access_token=TEST-7337691703929395-120613-092e05faf570fef41c0c2863589c535b-116975793`,
      {
        method: 'POST',
        body: JSON.stringify({
          items,
          payer: {
            email: payer,
          },
        }),
      },
    );

    const preference = await response.json();

    return preference.id;
  };

  const startCheckout = async () => {
    let precio = 0;
    let descripcion = '';
    let cantidad = 0;
    let variedades = [];
    let idProducto = '';
    let total = 0;
    console.log(pedidos)
    pedidos.map(pedido => {
      precio += parseInt(pedido.infoCafe.precio) * pedido.cantidad;
      cantidad += pedido.cantidad;
      descripcion += ' | ' + pedido.infoCafe.nombre;
      variedades += pedido.selecciones;
      idProducto += pedido.infoCafe.id;
     console.log(idProducto, "he")
      total += precio * pedidos.length;
    });

    let pedido = {
      title: 'Cafeteria Carlitos',
      description: descripcion,
      quantity: 1,
      currency_id: 'ARS',
      unit_price: parseInt(precio),
    };

    try {
      console.log('Entrando al TRY');
      const preferenceId = await getPreferenceId('payment@gmail.com', pedido);

      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: 'TEST-834e4286-0ac9-45cb-be99-50bda7dfb214',
        preferenceId,
      });

      setPaymentResult(payment);

      if (payment.status === 'approved') {
        console.log('pete');
        enviarOrdenConfirmada(
          precio,
          cantidad,
          descripcion,
          variedades,
          idProducto,
          total,
        );
      }
    } catch (err) {
      Alert.alert('Something went wrong', err.message);
    }

   
  };

  const enviarOrdenConfirmada = async (
    precio,
    cantidad,
    descripcion,
    variedades,
    idProducto,
    total,
  ) => {
    const data = JSON.stringify({
      cafeteriaId: 1,
      total: total,
      clienteId: 1,
      estadoPago: 'PAGADO',
      horario: horarioSeleccionado,
      consumibles: [
        {
          id: idProducto,
          cantidad: cantidad,
          montoTotal: precio,
          variedades: variedades,
        },
      ],
    });

    let res = await fetch('http://vps-2290673-x.dattaweb.com/api/orden/', {
      method: 'POST',
      body: data,
      headers: {'Content-type': 'application/json; charset=UTF-8'},
    });
    console.log(res);
    const respuesta = await res.json();
    console.log(respuesta);
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View
        style={{
          backgroundColor: '#729C81',
          width: '100%',
          height: '5%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Listado', {id: id})}
          style={{flexDirection: 'row'}}>
          <Icon
            name="arrow-left"
            size={20}
            color="white"
            style={{marginLeft: 10}}
          />
          <Text style={{marginLeft: 10, color: 'white'}}>
            Volver al listado
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{height: '90%', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={startCheckout}
          style={{
            backgroundColor: '#18A9DF',
            height: 50,
            width: 250,
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              letterSpacing: 1,
              textAlign: 'center',
            }}>
            PAGAR CON MERCADOPAGO
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>
          Estado de transacción: {JSON.stringify(paymentResult.status)}
        </Text>
        <TouchableOpacity
          onPress={enviarOrdenConfirmada}
          style={{
            backgroundColor: '#18A9DF',
            height: 50,
            width: 250,
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              letterSpacing: 1,
              textAlign: 'center',
            }}>
            mandar datos
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#729C81',
          width: '100%',
          height: '5%',
        }}></View>
    </View>
  );
}
