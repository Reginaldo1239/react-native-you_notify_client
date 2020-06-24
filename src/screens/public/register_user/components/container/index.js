import React from 'react';
import {View} from 'react-native';
import {GRAY_LIGHT} from '../../../../../config_style'

export default function Container(props){
    let {children} = props;

    return(
        <View style={{flex:1,backgroundColor:GRAY_LIGHT}}>
                {children}
            </View>
    )
}    