import React from 'react';
import {View,Text} from 'react-native';

export default function MsgErroInput(props){
    let {children} = props;

    return (
        <View>
            <Text style={{fontSize:17,color:'red', marginLeft:10}}>{children}</Text>
        </View>
    )
} 