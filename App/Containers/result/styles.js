import { Platform, StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

export const styles = StyleSheet.create({
    container: {
      padding:  Metrics.baseMargin*2,
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
        paddingVertical: 12
    }
  });