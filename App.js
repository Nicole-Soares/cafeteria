import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {View, Text} from 'react-native';
import AppProvider from './src/context/AppContext';


export default function App({navigation}) {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={{width: '100%', height: '100%'}}>
          <StackNavigation />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}
