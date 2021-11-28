import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {View, Text} from 'react-native';
import AppProvider from './src/context/AppContext';
import { styles } from './src/theme/Style';

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={styles.contenedorPrincipal}>
          <StackNavigation />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}
