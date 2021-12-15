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
        justifyContent:"center",
        alignItems:"center"
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
    },
    contenedorMenuUsuario:{
        borderColor: '#729C81',
        borderWidth: 2,
        flexDirection: 'row',
        height: 50,
        elevation:100,
        zIndex:100,
        width:"100%",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:"#729C81"
    },
    contenedorNavbar: {
        flexDirection:"row", marginTop:80, elevation:2, justifyContent:"space-around",alignItems:"center", backgroundColor:"white", height:50, width:"80%", borderRadius:5
    },
    contenedorListado: {
        backgroundColor: '#F2F1F1', height: '100%', width: '100%'
    },
    contenedorNavbarDelListado:{
        backgroundColor: '#729C81',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carrusel:{
        justifyContent: 'center',
        alignSelf: 'center',
        width: 340,
        height: 150,
        marginTop: 50
    },
    contenedorListadoProductos:{
        marginTop: 10,
        height: '100%',
        width: '100%',
       alignItems:"center"
    },
    contenedorListadoCafe:{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    contenedorTextoTituloListado:{
        width: '90%', marginBottom: 10
    },
    contenedorCardListadoCafe:{
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

        justifyContent: 'space-around'
    },
    contenedorInfoCafe:{
        justifyContent: 'space-between',
        width: '90%',
        
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    contenedorDelTituloDelListadoDeJugos:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    contenedorJugo:{
        justifyContent:"space-between", alignItems:"center", flexDirection:"row", width:"90%"
    },
    botonJugo:{
        flexDirection:"row", width:"100%",  justifyContent:"space-between"
    },
    contenedorDulce:{
        justifyContent:"space-between", alignItems:"center", flexDirection:"row", width:"100%"
    },
    botonDulce:{
        flexDirection:"row", width:"100%",  justifyContent:"space-between"
    },
    contenedorCafe:{
        
        justifyContent:"space-between", alignItems:"center",  width:"90%"

    },
    botonCafe:{
        flexDirection:"row", width:"100%",  justifyContent:"space-between"
    },
    contenedorCafeteria:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 100,
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

        elevation: 3
    },
    contenedorPuntajeYPrecio:{
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#E1F980',
        backgroundColor: '#E1F980'
    },
    contenedorTituloMapa:{
        height: '10%',
        backgroundColor: '#729C81',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorSesion:{
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textInputSesion:{
        borderColor: 'white',
        borderBottomColor: '#D5D6D6',
        borderWidth: 2,
        width: '80%',
        marginBottom: 5,
        width: '100%'
    },
    textInputSesionContraseña:{
        borderColor: 'white',
        borderBottomColor: '#D5D6D6',
        borderWidth: 2,
        width: '80%',
        marginBottom: 5,
        width: '100%'
    },
    botonIngresarSesion:{
        borderWidth: 2,
              borderColor: '#729C81',
              borderRadius: 5,
              width: '100%',
              height: 40,
              marginBottom: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#729C81'
    },
    contenedorBotonSesionCrearCuenta:{
        flexDirection: 'row',
        width: '100%',
        height: 40,
        marginTop:50
    },
    botonCrearCuentaSesion:{
        borderWidth: 2,
        borderColor: '#729C81',
        borderRadius: 5,
        width: 370,
        height: 40,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#729C81'
    },
    contenedorBotonRegistrarse:{
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textInputRegistrarse:{
        borderColor: 'white',
        borderBottomColor: '#D5D6D6',
        borderWidth: 2,
        width: '80%',
        marginBottom: 5,
        width: '100%'
    },
    botonRegistrarse:{
        borderWidth: 2,
        borderColor: '#729C81',
        borderRadius: 5,
        width: '100%',
        height: 40,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#729C81'
    },
    contenedorRegistrado:{
        flexDirection: 'row',
        width: '70%',
        height: 40,
        justifyContent: 'space-around'
    },
    contenedorTituloSeleccionHorario:{
        backgroundColor: '#729C81',
        height: '20%',

        alignItems: 'center'
    },
    contenedorPicker:{
        borderColor: 'grey',
        borderWidth: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    picker:{
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderColor: 'black'
    },
    contenedorBotonPagar:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%'
    },
    botonPagarSeleccionHorario:{
        backgroundColor:"#729C81", 
        height:50, 
        width: 150,
        justifyContent:"center", 
        borderRadius:10
    },
    textoPagarSeleccionHorario:{
        color: 'white', fontSize: 25, letterSpacing: 1
    },
    estiloBotonCarritoSinProductos: {
        height:"100%",
        marginTop:15
    },
    estiloBotonCarritoConProductos: {
        height:"100%",
       
    }
})