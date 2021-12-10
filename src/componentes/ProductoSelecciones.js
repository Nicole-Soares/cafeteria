import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/Style';

import {Picker} from '@react-native-picker/picker';

export default function ProductoSelecciones({nombre, item, selecciones, setSelecciones}) {
  const [seleccionado, setSeleccionado] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  function seleccionProducto() {
    setSeleccionado(!seleccionado);

    /*
      try {
          let peticion = await fetch('api{id}')
         
          let res = await response.json()
           setInfoCafe(res)
      } catch (err) {
          console.error(err)
      }
  */
  }

  const opcionSeleccionada = itemValue => {
    // Chequeo si existe una seleccion previa
    if(selectedValue && selecciones.includes(selectedValue)){
        // La saco de la lista de selecciones
        selecciones.splice(selecciones.indexOf(selectedValue), 1);
    }
    setSelectedValue(itemValue);
    selecciones.push(itemValue)
    setSelecciones(selecciones);
    
  }
  

  return (
    <View style={{alignSelf: 'center', width: '95%'}}>
      <View>
        <Text style={styles.textoDeCantidadDelProducto}>
          {nombre.toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <Picker
          style={{width:"100%"}}
          selectedValue={selectedValue}
          placeHolder="Seleccionar uno"
          onValueChange={(itemValue, itemIndex) => opcionSeleccionada(itemValue)}>
            <Picker.Item label="Seleccionar uno" value={null} />
          {item.data.map(estado => (
            <Picker.Item label={estado.nombre} value={estado.nombre} />
          ))}
        </Picker>
      </View>
      <View style={styles.lineaDelPedido}></View>
    </View>
  );
}
