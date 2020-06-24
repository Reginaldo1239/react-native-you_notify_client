import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import LoadingAnimation from '../loading_animation';
import {Style} from './style';
export default function Buttonn(props){
    let {title,loading,styleText,styleButton} = props;
 
 return(
 loading?(
        <TouchableOpacity
        style={Style.button,styleButton} >
            <LoadingAnimation></LoadingAnimation>
      </TouchableOpacity>
):(
        <TouchableOpacity
        activeOpacity={0.5}
        style={Style.button} >
             <Text   style={Style.text}>{title}</Text>
      </TouchableOpacity>
 )
   ) 
 
    
} 