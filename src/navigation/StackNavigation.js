import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import React from 'react';
import LocalScreen from '../screen/LocalScreen';
import SesionScreen from '../screen/SesionScreen';
import RegistrarseScreen from '../screen/RegistrarseScreen';

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
    </Stack.Navigator>
  );
}
