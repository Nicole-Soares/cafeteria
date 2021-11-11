import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";

export default function Jugo({imagen, nombre, puntaje, precio}){
    return(
        <View
        style={{
            justifyContent:"space-between", borderColor:"pink", borderWidth:2, flexDirection:"row", width:"100%"
        }}>
            <TouchableOpacity>
           <View >
          <Image
            source={{uri: imagen}}
            style={{height: 80, width: 80, borderRadius: 5}}
          />
        </View>
        <View>
        <View >
          <Text style={{fontSize: 20}}>{nombre.toUpperCase()}</Text>
        </View>

        <View>
          <Text style={{fontSize: 15, color:"gold"}}>$ {precio}</Text>
        </View>
        <View>
          <Text style={{fontSize: 15, color:"green"}}>{puntaje}</Text>
        </View>
        </View>
        <View>
          <TouchableOpacity>
            <Text>flecha</Text>
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      </View>
    )
    
}