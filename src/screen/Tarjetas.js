
import React, { useState, useEffect, useContext } from 'react';
import {  View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import METHOD_DATA from "../../Method";
import DETAILS from "../../Details";
import { AppContext } from '../context/AppContext';
import {CardField} from '@stripe/stripe-react-native';






export default function Tarjetas() {

    const { setPublishableKey} = useContext(AppContext);

    /*const fetchPublishableKey = async () => {
      const key = await fetchKey(); // fetch key from your server here
      setPublishableKey(key);
    };
  
    useEffect(() => {
      fetchPublishableKey();
    }, []);*/
  
   const handlePayment = () =>{

   }


    return(
      <CardField
      postalCodeEnabled={true}
      placeholder={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        console.log('cardDetails', cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
    )
}