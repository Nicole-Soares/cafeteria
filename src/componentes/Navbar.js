import React, { useContext } from "react";
import { View,Text, SegmentedControlIOSComponent} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DEFAULT_ICON_SIZE } from "react-native-vector-icons/dist/lib/create-icon-set";
import { AppContext } from "../context/AppContext";
import { styles } from "../theme/Style";

export default function Navbar({navigation}){


const {setCafes, setJugos, setDulces, setTop} = useContext(AppContext);

const topOn = () =>{
    setJugos (false)
    setDulces(false)
    setCafes(false)
    setTop(true)
}

const cafeOn = () =>{
    setTop(false)
   setJugos (false)
    setDulces(false)
    setCafes(true)
  
}

const jugosOn = () =>{
    setTop(false)
    setCafes(false)
setDulces(false)
setJugos(true)
};

dulcesOn = () => {
    setTop(false)
    setCafes(false)
    setJugos(false)
    setDulces(true)
};


    return(
       <View style={styles.contenedorNavbar}> 
           <TouchableOpacity onPress={topOn}><Text style={{color:"#306C45"}}>TOP </Text></TouchableOpacity>
           <TouchableOpacity onPress={cafeOn} ><Text style={{color:"#306C45"}}>CAFÉ </Text></TouchableOpacity>
           <TouchableOpacity onPress={jugosOn}><Text style={{color:"#306C45"}}>ADICIONALES</Text></TouchableOpacity>
           <TouchableOpacity onPress={dulcesOn}><Text style={{color:"#306C45"}}>OTROS</Text></TouchableOpacity>
       </View> 
    )
}