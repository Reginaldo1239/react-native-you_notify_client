import React from 'react';
import {TouchableWithoutFeedback,View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Style } from './style';

export default function ButtonNext(props){

    return(
        <View style={Style.container} >
        <TouchableOpacity onPress={()=>props.onPress()} >
             <View style={Style.button} > 
        <Icon name={'navigate-next'} size={30}  color={'black'} ></Icon>
            </View>
        </TouchableOpacity >
        </View> 
    )
}
