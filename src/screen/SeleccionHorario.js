import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {AppContext} from '../context/AppContext';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../theme/Style';

export default function SeleccionHorario(props) {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const {cafeteria} = useContext(AppContext);

  const horariosDisponibles = (inicio, fin, intervalo) => {
    let fechaInicio = new Date();
    let fechaFin = new Date();
    let hoy = new Date()
    fechaInicio.setHours(inicio.split(':')[0], inicio.split(':')[1]);
    fechaFin.setHours(fin.split(':')[0], fin.split(':')[1]);
    
    //let horarioInicio = fechaInicio.toTimeString().split(' ')[0].split(':')
    //let horarioFin = fechaFin.toTimeString().split(' ')[0].split(':')

/*let horarios = [];
    for(i = hoy; i < fechaFin ; i + hoy.getMinutes() + intervalo){
     horarios.push(formatearHorario(i));
    
    } 
  
    return horarios; 
  }*/

  let horarios = [];
  let horarioActual = fechaInicio;
  horarios.push(formatearHorario(hoy));
  while (hoy < fechaFin) {
    hoy.setMinutes(hoy.getMinutes() + intervalo);
    horarios.push(formatearHorario(hoy));
  }
  return horarios;

  }


    
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
    <View style={{ alignContent:"center"}}>
      <View style={styles.contenedorTituloSeleccionHorario}>
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
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 20, letterSpacing: 1, marginBottom: 10}}>
          Cafeteria
        </Text>
        <View style={{ flexDirection:"row",
        marginTop: 10,
        width: '90%',
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
        justifyContent:"space-around",
        alignItems:"center"}}>
          <View>
            <Image
              source={{uri: cafeteria.imagen}}
              style={{height: 100, width: 100}}
            />
          </View>
          <View>
            <Text style={{fontFamily: 'oleoScript-Regular', fontSize: 18}}>{cafeteria.nombre}</Text>
            <Text style={{fontFamily: 'oleoScript-Regular', fontSize: 18}}>{cafeteria.descripcion}</Text>
          </View>
        </View>
      </View>
      <View
        style={{justifyContent: 'center',marginTop:30, alignItems: 'center'}}>
        <Text style={{fontSize: 20, letterSpacing: 1, marginBottom: 10}}>
          Selecciona horario para retirar tu orden
        </Text>
        {cafeteria ? (
          <View style={styles.contenedorPicker}>
            <Picker
              selectedValue={horarioSeleccionado}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setHorarioSeleccionado(itemValue)
              }>
              {cafeteria.horario.map(horarios => {
                return horariosDisponibles(
                  horarios.apertura,
                  horarios.cierre,
                  horarios.intervalo,
                ).map(horario => {
                  return <Picker.Item label={horario} value={horario} />;
                });
              })}
            </Picker>
          </View>
        ) : null}
        </View>
     

      <View style={styles.contenedorBotonPagar}>
        <TouchableOpacity
          style={styles.botonPagarSeleccionHorario}
          onPress={() => props.navigation.navigate('Tarjetas')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              letterSpacing: 3,
              color: 'white',
              padding: 5,
            }}>
            PAGAR
          </Text>
        </TouchableOpacity>
      </View>
   
    </View>
  );
}
