import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import React from 'react';
import LocalScreen from '../screen/LocalScreen';
import SesionScreen from '../screen/SesionScreen';
import RegistrarseScreen from '../screen/RegistrarseScreen';
import Cafe from '../componentes/Cafe';
import InfoCafe from '../screen/InfoCafe';
import MapaLocales from '../screen/MapaLocales';
import InformacionCafeteria from '../screen/InformacionCafeteria';
import Listado from '../componentes/Listado';
import Orden from '../screen/Orden';
import SeleccionHorario from '../screen/SeleccionHorario';
import Tarjetas from '../screen/Tarjetas';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LocalScreen" component={LocalScreen} />
      <Stack.Screen name="SesionScreen" component={SesionScreen} />
      <Stack.Screen name="RegistrarseScreen" component={RegistrarseScreen} />
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="InfoCafe" component={InfoCafe} />
      <Stack.Screen name="MapaLocales" component={MapaLocales} />
      <Stack.Screen name="InformacionCafeteria" component={InformacionCafeteria} />
      <Stack.Screen name="Listado" component={Listado} />
      <Stack.Screen name="Orden" component={Orden} />
      <Stack.Screen name="SeleccionHorario" component={SeleccionHorario} />
      <Stack.Screen name="Tarjetas" component={Tarjetas} />
    </Stack.Navigator>
  );
}
