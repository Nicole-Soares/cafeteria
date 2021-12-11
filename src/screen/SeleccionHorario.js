import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {AppContext} from '../context/AppContext';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { styles } from '../theme/Style';

export default function SeleccionHorario(props) {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const {cafeteria} = useContext(AppContext);

  const horariosDisponibles = (inicio, fin, intervalo) => {
    let fechaInicio = new Date();
    let fechaFin = new Date();
    fechaInicio.setHours(inicio.split(':')[0], inicio.split(':')[1]);
    fechaFin.setHours(fin.split(':')[0], fin.split(':')[1]);
    //let horarioInicio = fechaInicio.toTimeString().split(' ')[0].split(':')
    //let horarioFin = fechaFin.toTimeString().split(' ')[0].split(':')

    let horarios = [];
    let horarioActual = fechaInicio;
    horarios.push(formatearHorario(horarioActual));
    while (horarioActual < fechaFin) {
      horarioActual.setMinutes(horarioActual.getMinutes() + intervalo);
      horarios.push(formatearHorario(horarioActual));
    }
    return horarios;
  };

  const formatearHorario = horario => {
    let result = horario.toTimeString().split(' ')[0].split(':');
    result.pop();
    return result.join(':') + 'hs';
  };

  /* let horarios = []

    let horarioApertura = apertura
    let horarioIntervalo = intervalo
  let horarioCierre = cierre
   
  if(horarioApertura < horarioCierre){
      horarios.push(horarioApertura + horarioIntervalo)
  }

for(let inicio = apertura; inicio < cierre; inicio + intervalo){
     horarios.push(inicio)
 }*/

  return (
    <View>
      <View
        style={styles.contenedorTituloSeleccionHorario}>
        <View
          style={{justifyContent: 'flex-start', width: '100%', height: '40%'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Orden')}>
            <Icon name="arrow-left" color="white" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={{color: 'white', fontSize: 30, letterSpacing: 1}}>
          Retirar pedido
        </Text>
      </View>
      <View
        style={{justifyContent: 'center', height: '60%', alignItems: 'center'}}>
        <Text style={{fontSize: 20, letterSpacing: 1, marginBottom: 10}}>
          Selecciona horario para retirar tu orden
        </Text>
        {cafeteria ? (
          <View
            style={styles.contenedorPicker}>
            <Picker
              selectedValue={horarioSeleccionado}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setHorarioSeleccionado(itemValue)
              }>
              {horariosDisponibles(
                cafeteria.horario.apertura,
                cafeteria.horario.cierre,
                cafeteria.horario.intervalo,
              ).map(horario => {
                return <Picker.Item label={horario} value={horario} />;
              })}
            </Picker>
          </View>
        ) : null}
      </View>
      <View
        style={styles.contenedorBotonPagar}>
        <TouchableOpacity
          style={styles.botonPagarSeleccionHorario} onPress={()=>props.navigation.navigate("Tarjetas")}>
          <Text style={styles.textoPagarSeleccionHorario}>
            Pagar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
