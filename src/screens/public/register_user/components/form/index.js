import React from 'react';
import {View} from 'react-native'
export default function Form(props){
    let {children} = props;
    return(
        <View style={{marginTop:'30%',marginLeft:10,marginRight:10}}>
            {children}
        </View> 
    )
}

 
