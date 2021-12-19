import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

// Styles
import styles from './Styles/LaunchScreenStyles'

export function Controller (props) {
    const { navigation } = props
    const { navigate } = navigation
    return (
      <View style={[styles.mainContainer,{ justifyContent:'center', alignItems:'center'}]}>
        <Button
            title="Page and Route"
            containerStyle={{width:200,height:50}}
            onPress={()=> navigate('home')}
        />
        <Button
            title="Component"
            containerStyle={{width:200,height:50}}
            onPress={()=> navigate('component')}
        />

        <Button
            title="List Friend"
            containerStyle={{width:200,height:50}}
            onPress={()=> navigate('friend')}
        />
      </View>
    )
}
