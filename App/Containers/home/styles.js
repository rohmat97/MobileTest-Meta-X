import { Platform, StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex:1,
    },
    container_logo:{ 
      fontWeight: 'bold', 
      fontSize: 13,
      paddingTop:26,
      paddingBottom:27,
      paddingLeft:22,
      height:70,
      // backgroundColor:'red'
    },
    text:{
      color:'#fff',
      height:15,
      width: 35
    },
    textSearch:{
      color:'#fff',
      fontSize: 24,
      marginLeft:20
    },
    textSearch3:{
      color:'#fff',
      fontSize: 24,
      marginHorizontal:20,
      marginTop:20
    },
    textSearch2:{
      color:'#000',
      fontSize: 16,
      height:40,
      textAlign:'center',
      textAlignVertical:'center',
      backgroundColor:'#fff',
      borderRadius: 4,
      marginTop: 60,
      marginBottom: 120,
      marginHorizontal: 20
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
    result:{
      flexDirection:'row',
      marginHorizontal:20,
      marginTop:18
    },
    text_item_result:{
      color:'#fff',
      marginTop: 36,
    },
    text_item_result1:{
      color:'#fff',
      marginTop: 36,
      marginLeft: Metrics.baseMargin,
      marginLeft:-10
    },
    text_index:{
      color:'#fff',
      fontSize: 48
    },
    slider: {
      width: undefined, 
      height: 40,
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
    index: {
      flexDirection:'row',
      marginTop:- Metrics.baseMargin * 3,
      marginLeft: - Metrics.baseMargin/2,
      justifyContent:'space-between',
      alignItems:'center',
      marginRight:20,
    },
    index_1: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width: Metrics.screenWidth*0.625,

    },
    index_2: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:20, 
      marginTop: -18
    },
    divider:{
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      opacity:0.1,
      height: 221
    },
    bottom_bar: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:0,
      width: Metrics.screenWidth,
      height: 66,
      backgroundColor:'#181818'
    },
    icon_bottom_bar: {
      width:20,
      height:20,
      resizeMode:'contain',
      marginHorizontal: Metrics.baseMargin
    },
    icon_bottom_bar2: {
      width:20,
      height:20,
      resizeMode:'contain',
      marginHorizontal: Metrics.baseMargin,
      opacity: 0.5,
    },
     centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    // borderRadius: 20,
    // padding: 35,
    justifyContent:'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  });