import React, {useContext, useState, useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import Navbar from '../componentes/Navbar';
import MenuUsuario from '../componentes/MenuUsuario';
import {SliderBox} from 'react-native-image-slider-box';
import { AppContext } from '../context/AppContext';

const customData = require("../../cafeteria.json");

export default function LocalScreen({id, navigation}) {

  const [cafeteria, setCafeteria] = useState(customData);

  const {listadoCafeteriasOriginal} = useContext(AppContext);



  /*useEffect(() => {
    
     
        try {
          let peticion = await fetch("poner la api correspondiente/${id}");
          let res = await peticion.json();
          setCafeteria(res);
          
        } catch (error) {
          console.error(error);
        }
      
   
  }, []); */

 

  
     return(
      <View style={{backgroundColor:'#F9F0E1', height:"100%"}}>
      <View
        style={{
          backgroundColor: '#729C81',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Navbar />
      </View>
      <View>
        <SliderBox
          images={[
            require('../assets/imagenes/imagen-perfil.jpg'),
            require('../assets/imagenes/gatito.jpg'),
          ]}
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: 340,
            height: 150,
            marginTop: 50,
          }}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={{marginTop:20, justifyContent:"center", alignItems:"center", width:"100%"}}>
        <View style={{width:"100%", marginLeft:20}}>
          <Text style={{fontSize:25}}>Café</Text>
          <View style={{width:"90%", borderWidth:1, borderColor:"#D8DCD9" }}></View>
          <Text>{cafeteria.productos.cafe.datos.map(cafe =>{ return(
            <View>
               <Text>{cafe.nombre}</Text> 
               <Text>{cafe.precio}</Text> 
               <Text>{cafe.puntaje}</Text> 
               </View>
          )
           
              
            
          })}</Text>
        </View>
      </View>
      <View style={{marginTop:20, justifyContent:"center", alignItems:"center", width:"100%"}}>
        <View style={{width:"100%", marginLeft:20}}>
          <Text style={{fontSize:25}}>Jugos</Text>
          <View style={{width:"90%", borderWidth:1, borderColor:"#D8DCD9" }}></View>
          <Text>cafes....</Text>
        </View>
      </View>
      <View style={{marginTop:20, justifyContent:"center", alignItems:"center", width:"100%"}}>
        <View style={{width:"100%", marginLeft:20}}>
          <Text style={{fontSize:25}}>Dulces</Text>
          <View style={{width:"90%", borderWidth:1, borderColor:"#D8DCD9" }}></View>
          <Text>dulces</Text>
        </View>
      </View>

      <View style={{justifyContent:"flex-end",height:"35%", width: '100%'}}>
        <MenuUsuario navigation={navigation} />
      </View>
    </View>
    

    );
  
  
}
