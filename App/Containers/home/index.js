import React, { useState } from "react";
import { ActivityIndicator, Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearTextGradient } from "react-native-text-gradient";
import Slider from "react-native-slider";

import { styles } from './styles';
import images from "../../Themes/Images";
import API from '../../Services/Api'


const api = API.create()
export function HomePage(props) {
    const { navigation } =  props
    const { navigate } = navigation
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setsearch] = useState()
    const [active, setactive] = useState(false)
    const [numresult, setnumresult] = useState(1)
    const list = [3,6,9,12,15]

    const SubmitSearch = () =>{
        setModalVisible(true)
        api.Search({
            key:search,
            size:numresult>5?50:numresult*3,
            page: 1
            })
            .then(succ => {
                setModalVisible(false)
                navigate('result', { params: succ.data, key: search, size: numresult>5?50:numresult*3 })
            })
            .catch(err => setModalVisible(false))
    }
    const NavigateTags= () =>{
        setModalVisible(true)
        api.Tags()
            .then(succ => {
                setModalVisible(false)
                navigate('tags', { params: succ.data })
            })
            .catch(err => setModalVisible(false))
    }
    return(
        <View style={styles.container}>
            <LinearTextGradient
                style={styles.container_logo}
                locations={[0, 1]}
                colors={['#FFD25F', '#FF5C01']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                >
                <Text style={styles.text}>LOGO</Text>
            </LinearTextGradient>
            <Text style={styles.textSearch}>Search</Text>
            <TextInput
                style={active?[styles.input]:[styles.input,styles.empty_text,styles.empty_border_color]}
                onChangeText={setsearch}
                value={search}
                placeholder="Keyword"
                placeholderTextColor={'#fff'}
                numberOfLines={1}
                onTouchStart={()=> setactive(true)}
                onEndEditing={()=> setactive(false)}
            />
             {/* <TextInput
                style={active?[styles.input]:[styles.input,styles.empty_text,styles.empty_border_color]}
                onChangeText={setsearch}
                value={search}
                placeholder="Keyword"
                placeholderTextColor={'#fff'}
                numberOfLines={1}
                onTouchStart={()=> setactive(true)}
                onEndEditing={()=> setactive(false)}
            /> */}
            <Text style={styles.textSearch}># Of Results Per Page</Text>
            <View style={styles.result}>
                <Text style={styles.text_index}>{numresult>5?50:numresult*3}</Text>
                <Text style={[styles.text_item_result]}>result</Text>
            </View>
            <Slider
                value={parseInt(numresult)}
                onValueChange={(value)=>{
                    if(value>5){
                        setnumresult(7)
                    }else{
                        setnumresult(value)
                    }
                }}
                minimumValue={1}
                maximumValue={7}
                trackStyle={styles.track}
                thumbStyle={styles.thumb}
                minimumTrackTintColor='#ff5c01'
                maximumTrackTintColor="#ffd25f"
                animationType='timing'
                step={parseInt(numresult)>4?2:1}
            />
            <View style={styles.index}>
                <View style={styles.index_1}>
                    {
                        list.map(dat =>(
                            <Text style={styles.text_item_result}>{dat}</Text>
                        ))
                    }
                </View>
                <Text style={styles.text_item_result}>50</Text>
            </View>
            <View
                style={styles.divider}
            />
            <TouchableOpacity style={styles.submit} onPress={()=> SubmitSearch()}>
                <Text style={styles.textSearch2}>SEARCH</Text>
            </TouchableOpacity>
            <View style={styles.bottom_bar}>
                <Image source={images.Union} style={styles.icon_bottom_bar}/>
                <TouchableOpacity style={{padding:12}} onPress={()=> NavigateTags()}>
                    <Image source={images.Union} style={styles.icon_bottom_bar2}/>
                </TouchableOpacity>
            </View>
        <Modal
            animationType="fade"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ActivityIndicator color={'#fff'} size={80}/>
                </View>
            </View>
        </Modal>
        </View>
    )
}


// const SliderContainer = React.createClass({
//     getInitialState() {
//       return {
//         value: DEFAULT_VALUE,
//       };
//     },
  
//     render() {
//       var value = this.state.value;
  
//       return (
//         <View>
//           <View style={styles.titleContainer}>
//             <Text style={styles.caption} numberOfLines={1}>{this.props.caption}</Text>
//             <Text style={styles.value} numberOfLines={1}>{value}</Text>
//           </View>
//           {this._renderChildren()}
//         </View>
//       );
//     },
  
//     _renderChildren() {
//       return React.Children.map(this.props.children, (child) => {
//         if (child.type === Slider
//             || child.type === ReactNative.Slider) {
//           var value = this.state.value;
//           return React.cloneElement(child, {
//             value: value,
//             onValueChange: (val) => this.setState({value: val}),
//           });
//         } else {
//           return child;
//         }
//       });
//     },
//   });