import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Slider from "react-native-slider";
import { ApplicationStyles } from "../../Themes";
import { styles } from "./styles";

export function ComponentPage(props) {
    
    const [active, setactive] = useState(false)
    const list = [3,6,9,12,15]
    return(
        <View style={[ApplicationStyles.screen.container, styles.container]}>
            <ScrollView>
                <Text style={[styles.text, styles.h1, styles.title]}>Component</Text>
                <Text style={[styles.text, styles.h1, styles.title]}>Button</Text>
                <View style={styles.component}>
                    <View>
                        <Text style={styles.text}>NORMAL</Text>
                        <Text style={[styles.text, styles.normal]}>BUTTON</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>HOVER</Text>
                        <Text style={[styles.text, styles.hover]}>BUTTON</Text>
                    </View>
                </View>
                <View style={styles.component1}>
                    <Text style={[styles.text, styles.h3=2,{marginTop:40}]}>Outlined</Text>
                    <View style={{marginLeft:20}}>
                        <Text style={[styles.text, styles.h3,{fontWeight:'bold'}]}>NORMAL</Text>
                        <Text style={[styles.text, styles.outine_normal]}>Button</Text>
                    </View>
                    <View  style={{marginLeft:20}}>
                        <Text style={[styles.text, styles.h3,{fontWeight:'bold'}]}>HOVER</Text>
                        <Text style={[styles.text, styles.outine_hover]}>Button</Text>
                    </View>
                </View>
                <View style={styles.component1}>
                    <Text style={[styles.text, styles.h3,{marginTop:40}]}>Contained</Text>
                    <View style={{marginLeft:20}}>
                        <Text style={[styles.text, styles.h3,{fontWeight:'bold'}]}>NORMAL</Text>
                        <Text style={[styles.text, styles.outine_normal]}>Button</Text>
                    </View>
                    <View  style={{marginLeft:20}}>
                        <Text style={[styles.text, styles.h3,{fontWeight:'bold'}]}>HOVER</Text>
                        <Text style={[styles.text, styles.outine_hover]}>Button</Text>
                    </View>
                </View>
                <Text style={[styles.text, styles.h1, styles.title]}>Input</Text>
                <Text style={[styles.text, styles.h3, styles.title]}>NORMAL</Text>
                <TextInput
                    style={[styles.input,styles.empty_text,styles.empty_border_color]}
                    // onChangeText={setsearch}
                    // value={search}
                    placeholder="Keyword"
                    placeholderTextColor={'#fff'}
                    numberOfLines={1}
                    // onTouchStart={()=> setactive(true)}
                    // onEndEditing={()=> setactive(false)}
                />
                <Text style={[styles.text, styles.h3, styles.title]}>FOCUSED</Text>
                <TextInput
                    style={[styles.input]}
                    // onChangeText={setsearch}
                    // value={search}
                    placeholder="Keyword"
                    placeholderTextColor={'#fff'}
                    numberOfLines={1}
                    onTouchStart={()=> setactive(true)}
                    onEndEditing={()=> setactive(false)}
                />
                
                <Text style={[styles.text, styles.h1, styles.title,{marginBottom: 20}]}>Slider</Text>
                <View style={{marginHorizontal: 20, marginBottom: 20}}>
                    <Slider
                        value={5}
                        // onValueChange={(value)=>{
                        //     if(value>5){
                        //         setnumresult(7)
                        //     }else{
                        //         setnumresult(value)
                        //     }
                        // }}
                        minimumValue={1}
                        maximumValue={7}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor='#ff5c01'
                        maximumTrackTintColor="#ffd25f"
                        animationType='timing'
                        // step={parseInt(numresult)>4?2:1}
                    />
                    <View style={styles.index_2}>
                        <View style={styles.index_1}>
                            {
                                list.map((dat,index) =>(
                                    <Text style={index>1?[styles.text_item_result,{ marginLeft:10}]:[styles.text_item_result]}>{dat}</Text>
                                ))
                            }
                        </View>
                        <Text style={styles.text_item_result}>50</Text>
                    </View>
                </View>
                <View style={{marginHorizontal: 20, marginBottom: 20}}>
                    <Slider
                        value={7}
                        // onValueChange={(value)=>{
                        //     if(value>5){
                        //         setnumresult(7)
                        //     }else{
                        //         setnumresult(value)
                        //     }
                        // }}
                        minimumValue={1}
                        maximumValue={7}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor='#ff5c01'
                        maximumTrackTintColor="#ffd25f"
                        animationType='timing'
                        // step={parseInt(numresult)>4?2:1}
                    />
                    <View style={styles.index_2}>
                        <View style={styles.index_1}>
                            {
                                list.map((dat,index) =>(
                                    <Text style={index>1?[styles.text_item_result,{ marginLeft:10}]:[styles.text_item_result]}>{dat}</Text>
                                ))
                            }
                        </View>
                        <Text style={styles.text_item_result}>50</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}