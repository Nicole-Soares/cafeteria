import React, {useEffect, useState, useContext} from "react";
import {View, Text, Image,TouchableOpacity} from "react-native";
import { AppContext } from "../context/AppContext";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../theme/Style";

export default function InformacionCafeteria(props){
    const [locales, setLocales] = useState(null);
    const {listadoCafeteriasOriginal, productoresListaOriginal} =
    useContext(AppContext);

    useEffect(() => {
        const resultado = listadoCafeteriasOriginal.filter(
          local => local.id === props.route.params.id,
        );
        if (resultado.length > 0) {
          setLocales(resultado[0]);
        }
      }, [locales]);

      console.log(locales)

if (locales){
    return(
       <View style={{alignItems:"center"}}>
            <View style={{ width:"100%", backgroundColor:'#729C81', alignItems:"center"}}>
                <Image source={{uri: locales.thumbnail}} style={{width: "80%", height: 300, justifyContent:"flex-start", alignItems:"flex-start"}}/>
                <View
              style={{
                elevation: 100,
                zIndex: 10,
                position: 'relative',
                top: -300,
                width:"100%"
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MapaLocales')}>
                <Icon name="arrow-left" color="white" size={20} />
              </TouchableOpacity>
            </View>
            </View>
            <View style={{display: 'flex',
        marginTop: 10,
        width: '90%',
        
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#E2E2E2',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        alignItems:"center"
        }}>
           <View style={{width:"90%"}}>
               <Text style={{fontWeight:"bold", fontSize:25, letterSpacing:3}}>{locales.nombre}</Text>
               <Text style={{letterSpacing:1, fontSize:17}}>{locales.direccion}</Text>
           </View>
           <View style={{width:"90%", borderColor:"grey", borderWidth:1, width:"90%"}}></View>
           <View style={{width:"90%"}}>
               <View>
                   <Text>HORARIO</Text>
               </View>
               
           </View>
           <View style={{width:"90%", borderColor:"grey", borderWidth:1}}></View>
           <View style={{width:"90%"}}>
               <Text>{locales.descripcion}</Text>
           </View>
           <View style={{marginTop:20}}>
             <TouchableOpacity onPress={()=>props.navigation.navigate("Listado", {id:locales.id})}><Text style={{fontSize:17, letterSpacing:1}}>Ir al Menú</Text></TouchableOpacity>
           </View>
           </View>
       </View>
    )
}
else{
    return(
        <View>
            <Text>no hay local</Text>
        </View>
    )
}
 
}