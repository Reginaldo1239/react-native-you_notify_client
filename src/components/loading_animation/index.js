import React,{useRef, useEffect, useState} from 'react';
import {View,Animated, Easing} from 'react-native';
import {Style} from './style';

export default function LoadingAnimation (){
    const ani = new Animated.Value(0);
    useEffect(()=>{

        runAnimation()
    })

  const  runAnimation=()=>{
   
    Animated.loop(Animated.timing(
            ani,{
               toValue:1,
               duration:500,
               easing: Easing.linear,
               useNativeDriver: true
            }     
        )).start();
    }
    return(
        <Animated.View  style={{padding:20,width:40,borderRadius:20,borderLeftWidth:1,borderRightWidth:2,borderBottomWidth:1,borderTopWidth:1,borderColor:'white',alignContent:'center',transform:[{rotate:  ani.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg'] 
        })}]}} >

        </Animated.View> 
    )
}    