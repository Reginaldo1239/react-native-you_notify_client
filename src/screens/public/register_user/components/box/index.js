import React from 'react';
import {View} from 'react-native';

export default function box(props){
    let {children} = props;
    return (
        <View style={{marginTop:30,marginRight:10}} >
            {children}
        </View>
    )
}  