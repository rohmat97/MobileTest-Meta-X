import { Platform, StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

export const styles = StyleSheet.create({
    container: {
      padding:  Metrics.baseMargin*2,
      backgroundColor: '#000',
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
    header: {
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginTop: 12
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
    images: {
        height:Metrics.screenHeight*0.2,
        width:Metrics.screenWidth,
        paddingHorizontal: Metrics.screenWidth*0.1,
        // backgroundColor:'red',
        alignSelf:'center',
        marginVertical: 12
    },
    item_result: {
        paddingVertical: 12,
        margin: 8,
        // backgroundColor:'red',
        width: Metrics.screenWidth*0.4
    },
    contain: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        margin: 8,
        marginBottom: 12
    },
    padding: {
        padding: 8
    },
    item_contain: {
        backgroundColor: 'rgba(214, 213, 203, 0.3)',
        height:150,
        width: 150,
        borderRadius:10,
        marginBottom: 12,
        flexDirection:'column',
        justifyContent:'flex-end'
    }
  });