import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {View, Text} from 'react-native';
import AppProvider from './src/context/AppContext';
import {styles} from './src/theme/Style';
import {StripeProvider} from '@stripe/stripe-react-native';
import Tarjetas from './src/screen/Tarjetas';

export default function App({navigation}) {
  return (
    <StripeProvider
      publishableKey="key"
      merchantIdentifier="merchant.identifier">
      <NavigationContainer>
        <AppProvider>
          <View style={styles.contenedorPrincipal}>
            <StackNavigation />
 
          </View>
        </AppProvider>
      </NavigationContainer>
    </StripeProvider>
  );
}
