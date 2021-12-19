import { PixelRatio, Platform, StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

export const styles = StyleSheet.create({
    container: {
    //   padding:  Metrics.baseMargin*2,
      backgroundColor: '#181818',
    },
    back :{
        height:40,
        width:40,
        marginRight: Metrics.baseMargin,
        marginLeft: -Metrics.baseMargin
    },
    text: {
        color:'white'
    },
    h1: {
        fontSize: 24
    },
    h2: {
        fontSize: 16
    },
    h3: {
        fontSize: 12
    },
    title: {
        marginTop: 20,
        marginLeft: 20
    },
    component: {
        flexDirection:'row',
        marginTop: 37,
        marginLeft: 20
    },
    component1: {
        flexDirection:'row',
        marginTop: 37,
        marginLeft: 20,
    },
    normal: {
        backgroundColor:'white',
        borderRadius: 4,
        width:  Metrics.screenWidth* 0.4,
        height: 32,
        color: '#121212',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign:'center',
        textAlignVertical:'center', 
        marginRight:23,
        marginTop:13
    },
    hover: {
        backgroundColor:'transparent',
        borderRadius: 4,
        width:  Metrics.screenWidth* 0.4,
        height: 32,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign:'center',
        textAlignVertical:'center', 
        marginRight:23,
        borderWidth:1,
        borderColor:'white',
        marginTop:13
    },
    outine_normal: {
        borderWidth:1,
        borderColor:'white',
        borderRadius:20,
        padding:8,
        marginTop:12
    },
    outine_hover:{
        borderWidth:1,
        borderColor:'#121212',
        borderRadius:20,
        padding:8,
        color:'#121212',
        backgroundColor:'white',
        marginTop:12
    },
    input:{
        height: 60,
        marginTop:16,
        borderWidth: 3,
        paddingLeft:18,
        paddingBottom:19,
        paddingTop:20,
        paddingRight:18,
        marginHorizontal: 20,
        borderRadius: 4,
        color: '#fff',
        borderColor:'#FF9B33'
    },
    empty_text:{
        opacity:0.3
    },
    empty_border_color:{
        borderColor: "rgba(255, 255, 255, 0.7)",
    },
    track: {
        height: 10,
        borderRadius: 4,
        backgroundColor: 'gray',
        shadowColor: 'gray',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 1,
        shadowOpacity: 0.15,
      },
      thumb: {
        width: 20,
        height: 20,
        backgroundColor: '#000',
        borderColor: '#ffd25f',
        borderWidth: 5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 2,
        shadowOpacity: 0.35,
      },
      index_1: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: Metrics.screenWidth*0.6,
  
      },
      index_2: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // marginHorizontal:20, 
        marginTop: -18
      },
      
    text_item_result:{
        color:'#fff',
        marginTop: 36,
      },
  });