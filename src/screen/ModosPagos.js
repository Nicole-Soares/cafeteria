import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default function ModosPagos({navigation}){
    return(
        <View style={{justifyContent:"space-between", height:"90%", alignItems:"center", width:"100%"}}>
             <View style={{ backgroundColor: '#729C81', width:"100%", height:"20%", justifyContent:"center", alignItems:"center"}}>
                
                    <Text style={{color:"white", fontSize:30, letterSpacing:2}}>Métodos de pago</Text>
               
                </View>
                <View>
                    <Text style={{fontSize:20, letterSpacing:1}}>Seleccione un método de pago</Text>
                </View>
            <View style={{ backgroundColor: '#729C81', width:"80%", height:"15%", justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Tarjetas")}>
                    <Text style={{color:"white", fontSize:20, letterSpacing:2}}>Tarjeta</Text>
                </TouchableOpacity>
                </View> 
             
        </View>
    )
}