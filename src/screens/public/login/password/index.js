import React, { useState } from 'react';
import {View,Text} from 'react-native';
import {Style} from './style';
import Label from '../../../../components/label';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import MsgErroInput from '../../../../components/msgErroInput';
import Validation from '../../../../global/validation';
import {getItem,clearAll} from '../../../../global/LocalStorage';
export default function Password(){
    const [password,setPassword] = useState('');
    const [passwordError,setPasswordError] = useState('');


    const validForm=()=>{
        if(!Validation.minLength(password,1)){
            setPasswordError('o campo está vazio');
        }else{
            sendForm();
        }
    }
    const sendForm=()=>{
        let email= getItem('email');

        let post={
            email:email,
            password:password
        }
        clearAll();
    }
    return(
        <View>
            <View style={Style.form}>
                <Label>senha</Label>
                <Input
                onChangeText={text=>setPassword(text)}
                 password={true}
                ></Input>       
                    <MsgErroInput>{passwordError}</MsgErroInput>
                <View style={Style.box}>
                    <Button
                    title={'entrar'}
                    onPress ={()=>validForm()}
                    ></Button>
                </View>
            </View>
        </View>
    ) 
} 