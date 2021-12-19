import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ApplicationStyles } from "../../Themes";
import images from "../../Themes/Images";
import { styles } from "./styles";

import API from '../../Services/Api'
import { Image } from "react-native-elements";
import { F } from "ramda";

const api = API.create()
export function TagsPage(props) {
    const { navigation } = props
    const { pop, getParam } = navigation
    const [data, setdata] = useState([])
    const [all_data, setall_data] = useState()
    useEffect(() => {
        setdata(getParam('params'))
    }, [])
    return(
        <View style={[ApplicationStyles.screen.container, styles.container]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> pop()}>
                    <Image source={images.chevronLeft} style={styles.back} resizeMode='contain'/>
                </TouchableOpacity>
                <Text style={[styles.text, styles.h1]}>Home Page</Text>
            </View>
            <Text style={[styles.text, styles.h1, { marginTop: 40}]}>Tags</Text>
            <FlatList 
                data={[...data,...data]}
                ListEmptyComponent={<View><Text>Data Not Found</Text></View>}
                numColumns={2}
                style={{margin:4}}
                indicatorStyle={'white'}
                renderItem={({item}) =>{
                    return(
                        <View style={styles.item_result}>
                            <View style={styles.item_contain}>
                                <Text style={[styles.text, styles.h1, styles.contain, styles.padding]} numberOfLines={1}>{item.name}</Text>
                            </View>
                            <Text style={[styles.text, styles.h2]}>{item.name}</Text>
                            <Text style={[styles.text, styles.h3]}>{item.count} Questions</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}