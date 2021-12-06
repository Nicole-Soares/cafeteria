import React from "react";
import { View,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../theme/Style";

export default function Navbar({navigation}){
    return(
       <View style={styles.contenedorNavbar}> 
           <TouchableOpacity ><Text style={{color:"#306C45"}}>TOP 5</Text></TouchableOpacity>
           <TouchableOpacity ><Text style={{color:"#306C45"}}>CAFÉ </Text></TouchableOpacity>
           <TouchableOpacity><Text style={{color:"#306C45"}}>JUGOS</Text></TouchableOpacity>
           <TouchableOpacity><Text style={{color:"#306C45"}}>DULCES</Text></TouchableOpacity>
       </View> 
    )
}