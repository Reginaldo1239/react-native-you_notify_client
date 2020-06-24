import React, { useState } from 'react';
import {View} from 'react-native';
import Label from '../../../components/label';
import Input from '../../../components/input';
import ButtonNext from '../../../components/button_next';
import Email from './sub_screens/email'
import { Style } from './style';

export default function RegisterUser(props){
    const [nextScreen ,setNextScreen] = useState(false);

 
 
    return (
        <Email></Email> 
       
    )
}  
 
/* <View style={Style.container}>
            <View style={Style.form}>
            <Email 
            nextScreen={()=>console.log('next')}
            ></Email>     
            </View>   
        </View>*/