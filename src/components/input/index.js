import React,{useRef, useEffect, useState} from 'react';
import  {TextInput} from 'react-native';
import {Style}  from './style';
export default function Input (props){

    let {value,password} = props
    

    aas=()=>{
        console.log(borderInput.current.style.borderColor='red')
    }
    return(
        password ===true?(     
        <TextInput 
         style={Style.TextView}
         onChangeText ={text=>props.onChangeText(text)}
         value={value} 
         secureTextEntry
        ></TextInput>
        ):(
        <TextInput 
             style={{...Style.TextView }}
             onChangeText ={text=>props.onChangeText(text)}
             value={value} 
         ></TextInput>
        )) 
}