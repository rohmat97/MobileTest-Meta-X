import { Platform, StyleSheet } from "react-native";
import { Metrics } from "../../Themes";

export const styles = StyleSheet.create({
    container: {
    //   padding:  Metrics.baseMargin*2,
      backgroundColor: '#181818',
      flex: 1
    },
    back :{
        height:40,
        width:40,
        marginRight: Metrics.baseMargin,
        marginLeft: -Metrics.baseMargin
    },
    text: {
        color:'white',
        width:  Metrics.screenWidth*0.5,
        height:32,
        textAlign:'center',
    },
    picked: {
        fontWeight:'bold',
        borderBottomWidth:2,
        borderBottomColor:'white',
    },
    header: {
        flexDirection:'row',
        alignItems:'center',
        marginTop: 32,
        justifyContent:'space-between'
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
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 8,
        margin: 8,
        marginBottom: 12,
        fontWeight: 'bold'
    },
    padding: {
        padding: 8
    },
    item_contain: {
        backgroundColor: 'transparent',
        borderRadius:10,
        // marginBottom: 6,
    },
    following:{
        backgroundColor:'white',
        color:'black',
        borderRadius: 20,
        width: 76,
        height:28,
        fontSize:12,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight:'bold'
    },
    not_follow:{
        backgroundColor:'black',
        color:'white',
        borderRadius: 20,
        width: 76,
        height:28,
        fontSize:12,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: 'white'
    }
  });