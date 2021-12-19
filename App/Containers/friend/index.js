import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { styles } from "./styles";
import API from '../../Services/Api'

const api = API.create()
export function FriendPage(props) {
    const [index, setindex] = useState(1)
    const [data_followers, set_data_followers] = useState([])
    const [all_data_followers, set_all_data_followers] = useState()
    const [data_following, set_data_following] = useState([])
    const [all_data_following, set_all_data_following] = useState()
    
    const Fetch=()=>{
        if(index===1){
            api.getFollowers({
                page:all_data_followers.page+1,
                size:10
            })
            .then(
                succ =>{
                    let merger = [...data_followers, ...succ.data.data]
                    set_data_followers(merger)
                    set_all_data_followers(succ.data)
                }
            )
        }else{
            api.getFollowing({
                page:all_data_following.page+1,
                size:10
            })
            .then(
                succ =>{
                    let merger = [...data_following, ...succ.data.data]
                    set_data_following(merger)
                    set_all_data_following(succ.data)
                }
            )
        }
    }

    const Initials = async () =>{
        await api.getFollowers({
            page:1,
            size:10
        })
        .then(
            succ =>{
                set_data_followers(succ.data.data)
                set_all_data_followers(succ.data)
            }
        )
        await api.getFollowing({
            page:1,
            size:10
        })
        .then(
            succ =>{
                set_data_following(succ.data.data)
                set_all_data_following(succ.data)
            }
        )
    }
    useEffect(() => {
        Initials()
    }, [])
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> setindex(1)}>
                <Text style={index === 1?[styles.text,styles.picked]:styles.text}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setindex(2)}>
                <Text style={index === 2?[styles.text,styles.picked]:styles.text}>Followings</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={index === 1?data_followers:data_following}
            onEndReached={({ distanceFromEnd }) => {
                // console.log(`distanceFromEnd`, distanceFromEnd)
                Fetch()
            }}
            ListEmptyComponent={<View style={{flex:1}}> <ActivityIndicator color={'white'} size={'large'}/></View>}
            renderItem={({item})=>{
                return(
                <ListItem
                    containerStyle={styles.item_contain}
                    >
                    <Avatar
                        source={{ uri: item.avater }}
                    />
                    <ListItem.Content>
                        <ListItem.Title style={[styles.h2,{color:'white'}]}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle  style={[styles.h3,{color:'white'}]}>@{item.username}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text style={item.isFollowing?[styles.h2, styles.following]:[styles.h2, styles.not_follow]}>
                        {item.isFollowing?'Following':'Follow'}
                    </Text>
                </ListItem>
            )}}
        />
   
    </View>
    )
}