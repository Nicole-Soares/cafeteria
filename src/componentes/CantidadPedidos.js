import React, {useContext} from "react";
import {View, Text} from "react-native";
import { AppContext } from "../context/AppContext";


export default function CantidadPedidos(){
 const {pedidos} = useContext(AppContext);

    return(
        <View style={{borderRadius:200, borderWidth:1, backgroundColor:"white", position:"relative", top:40, elevation:10, left:20, height:20, width:20}}>
            <Text style={{textAlign:"center", color:"black", fontWeight:"bold"}}>{pedidos.length}</Text>
        </View>
    )
}