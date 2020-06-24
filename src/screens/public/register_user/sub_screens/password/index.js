import React,{useState, useEffect} from 'react';
import {View,TextInput} from 'react-native'

import Component from '../../components/container';
import Form from '../../components/form';
import Box from '../../components/box';
import Input from '../../../../../components/input';
import Label from '../../../../../components/label';
import ButtonNext from '../../../../../components/button_next';
import Validation from '../../../../../global/validation';

import {setItem,getItem} from '../../../../../global/LocalStorage';
 
export default function Password(){
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] = useState('');

    const [passwordErro,setPasswordErro] = useState('');
    const [confirmPasswordErro,setConfirmPasswordErro]= useState('');
    useEffect( ()=>{
    
    })

   const validForm=()=>{
       setPasswordErro('');
       setConfirmPasswordErro('');
    if(!Validation.minLength(password,1)){
        setPasswordErro('o campo está vazio');
    }else{
        
        if(!Validation.minLength(confirmPassword,1)){
            setConfirmPasswordErro('o campo está vazio');
        }else if(!Validation.equalPassword(password,confirmPassword)){
            setConfirmPasswordErro('as senhas não são iguais');
        }else{
            sendForm();
        }
    }
   }
   const  sendForm = async ()=>{
        let email = await getItem('email');
        let name = await getItem('name');
        let dateOfBirth = await getItem('dateOfBirth');
        console.log(email)
        console.log(name)
        console.log(dateOfBirth) 


   }
    return (
        <Component>
            <Form>
                <Label>senha </Label>
                <Input
                onChangeText={text=>setPassword(text)}
                value={password}
                password={true}
                />
                <View style={{marginTop:20}}>
             <Label>confirmar senha </Label>
                <Input
                onChangeText={text=>setConfirmPassword(text)}
                value={confirmPassword}
                password={true}
                />
                 </View>
            </Form>
            <Box>
                <ButtonNext
                onPress={()=>validForm()}
                />

            </Box>
        </Component> 
    )
} 