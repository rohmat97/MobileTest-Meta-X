import { Platform, StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

export const styles = StyleSheet.create({
    container: {
      padding:  Platform.OS==='android'? Metrics.baseMargin*2: Metrics.baseMargin,
      paddingTop: Platform.OS==='ios'?40:0,
      backgroundColor: '#000',
      flex:1,
    },
    container_logo:{ 
      fontWeight: 'bold', 
      fontSize: 14,
      paddingVertical: Metrics.baseMargin*2,
    },
    text:{
      color:'#fff',
    },
    textSearch:{
      color:'#fff',
      fontSize: 24
    },
    textSearch2:{
      color:'#000',
      fontSize: 16,
      padding: 12
    },
    input:{
      height: 60,
      marginVertical: Metrics.baseMargin * 2,
      borderWidth: 3,
      padding: Metrics.baseMargin*2,
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
    },
    text_item_result:{
      color:'#fff',
      marginTop: 36,
      marginLeft: Metrics.baseMargin
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
      alignItems:'center'
    },
    index_1: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width: Metrics.screenWidth*0.625,
      paddingLeft:12
    },
    divider:{
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      opacity:0.1,
      marginTop: Metrics.screenHeight*0.2
    },
    submit: {
      width: Metrics.screenWidth*0.9,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
      marginTop: Metrics.screenHeight*0.15,
      borderRadius: 4
    },
    bottom_bar: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      bottom:0,
      width: Metrics.screenWidth,
      height: Metrics.screenHeight*0.075,
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