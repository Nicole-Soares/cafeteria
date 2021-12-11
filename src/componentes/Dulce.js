import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../theme/Style";

export default function Dulce({imagen, nombre, precio, puntaje, navigation, id, idCafeteria}){




   return(
      
    <View style={styles.contenedorDulce}>
      <TouchableOpacity style={styles.botonDulce} onPress={()=>navigation.navigate("InfoCafe", {id:idCafeteria})}>
  <View >
     
              <Image
                source={{uri: imagen}}
                style={{height: 80, width: 80, borderRadius: 5}}
              />
            </View>
            <View style={{ width:"65%"}}> 
              <View style={{width:"100%", textAlign:"left"}}>
                <Text style={{fontSize: 20}}>
                  {nombre.toUpperCase()}
                </Text>
              </View>

              <View>
                <Text style={{fontSize: 15, color: 'gold'}}>
                  $ {precio}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 15, color: 'green'}}>
                  {puntaje}
                </Text>
              </View>
            </View>
            <View style={{alignSelf:"center"}}>
            <Icon name="angle-right" color="grey" size={20} />
            </View>
            </TouchableOpacity>
            </View>
   )
}