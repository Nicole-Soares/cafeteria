import React from "react";
import { View,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Navbar(){
    return(
       <View style={{flexDirection:"row", marginTop:80, elevation:2, justifyContent:"space-around",alignItems:"center", backgroundColor:"white", height:50, width:"80%", borderRadius:5, }}> 
           <TouchableOpacity><Text style={{color:"#306C45"}}>TOP 5</Text></TouchableOpacity>
           <TouchableOpacity><Text style={{color:"#306C45"}}>CAFÉ </Text></TouchableOpacity>
           <TouchableOpacity><Text style={{color:"#306C45"}}>JUGOS</Text></TouchableOpacity>
           <TouchableOpacity><Text style={{color:"#306C45"}}>DULCES</Text></TouchableOpacity>
       </View> 
    )
}