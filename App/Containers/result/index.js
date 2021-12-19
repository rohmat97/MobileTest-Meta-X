import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator , Text, View, TouchableOpacity } from "react-native";
import { Image } from 'react-native-elements';

import { ApplicationStyles } from "../../Themes";
import images from "../../Themes/Images";
import { styles } from './styles';
import API from '../../Services/Api'

const api = API.create()
export function ResultPage(props) {
    const { navigation } = props
    const { getParam, pop } = navigation
    const [data, setdata] = useState([])
    const [current, setcurrent] = useState()
    const [key, setkey] = useState()
    const [size, setsize] = useState()
    useEffect(() => {
        setdata(getParam('params').data)
        setcurrent(getParam('params'))
        setkey(getParam('key'))
        setsize(getParam('size'))
    }, [])
    const Fetch = () =>{
        api.Search({
            key:key,
            size:size,
            page:current.page+1
            })
            .then(succ => {
                let merge = [...data, ...succ.data.data]
                setdata(merge)
                setcurrent(succ.data)
            })
            .catch(err => setModalVisible(false))
    }
    return(
        <View style={[ApplicationStyles.screen.container, styles.container]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> pop()}>
                    <Image source={images.chevronLeft} style={styles.back} resizeMode='contain'/>
                </TouchableOpacity>
                <Text style={[styles.text, styles.h1]}>Home Page</Text>
            </View>
            <Text style={[styles.text, styles.h1, { marginTop: 40}]}>Results</Text>
            <FlatList 
                data={data}
                ListEmptyComponent={<View><Text>Data Not Found</Text></View>}
                onEndReached={({ distanceFromEnd }) => {
                    console.log(`distanceFromEnd`, distanceFromEnd)
                    Fetch()
                }}
                renderItem={({item}) =>{
                    return(
                        <View style={styles.item_result}>
                            <Image 
                                source={{uri: item.avater}} 
                                style={styles.images} resizeMode='cover'
                                PlaceholderContent={<ActivityIndicator color={'white'} size={32}/>}
                            />
                            <Text style={[styles.text, styles.h2]}>{item.name}</Text>
                            <Text style={[styles.text, styles.h3]}>{item.username}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}