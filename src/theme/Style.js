import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({


    contenedorPrincipal: {
        width: '100%', height: '100%'
    },
    contenedorHomeScreen: {
        width: '100%', height: '100%', backgroundColor: '#F9F0E1',
        flex:1
    },
    lineaHomeScreen: {
        backgroundColor: '#729C81',
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorCafeteria: {
        width: '100%', alignItems: 'center'
    },
    contenedorMenuUsuario: {
        position:"relative",
        left:0,
        right:0,
        bottom:0,
        elevation:100
    },
    contenedorAgregarProducto: {
        backgroundColor: '#F2F1F1',
        height: '100%',
        alignItems: 'center',
    },
    contenedorImagenPedidoProducto: {
        height: 300, width: '100%'
    },
    imagenDelPedido:{
        height: '100%', width: '100%'
    },
    cardDelPedido: {
        display: 'flex',
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
    },
    contenedorDeNombreYPrecio:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:"70%"
    },
    textoNombrePedidoDelProducto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        fontFamily: 'EncodeSans-Bold',
        letterSpacing: 3,
        textTransform:"uppercase"
    },
    textoPrecioDelPedido: {
        fontSize: 20, color: 'gold'
    },
    contenedorDescripcionDelPedido: {
        justifyContent:"center", width:"70%", alignItems:"center"
    },
    textODescripcionDelPedido: {
        fontSize: 15,

        letterSpacing: 2,
    },
    lineaDelPedido:{
        borderColor: '#D1D1D1', borderWidth: 1, width:"95%", alignSelf:"center",
        marginBottom:5,
        marginTop:5
    },
    contenedorCantidadDelProducto:{
        flexDirection:"row", justifyContent:"space-between", width:"95%", alignSelf:"center"
    },
    textoDeCantidadDelProducto:{
        fontSize:15, letterSpacing:3, fontWeight:"bold"
    },
    contenedorDeSumarYRestarProductos: {
        flexDirection:"row", justifyContent:"space-between", width:"30%",
        
    },
    cardDeVariedadesDelPedido:{
        display: 'flex',
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
    },
    textoDeSeleccionado: {
        textAlign:"center", fontSize:13,  
                        letterSpacing: 3,
                        borderColor:"grey",
                        borderWidth:1
    },
    textoDeNoSeleccionado: {
        textAlign:"center", fontSize:13,  
                        letterSpacing: 3,
    }
})