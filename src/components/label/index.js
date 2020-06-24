import React from 'react';
import {Text} from 'react-native';
import {Style} from './style';
export default  function Label(props){
    let { children} = props;
 return (
    <Text style={Style.Text}>
        {children}
    </Text>
    ) 
}