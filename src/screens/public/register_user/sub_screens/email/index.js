import React, { useState, useEffect } from 'react';
import{View} from 'react-native';
import Label from '../../../../../components/label';
import Input from '../../../../../components/input';
import Validation from '../../../../../global/validation';
import Container from '../../components/container';
import Form from '../../components/form/index';
import Box from '../../components/box';
import ButtonNext from '../../../../../components/button_next';
import MsgErroInput from '../../../../../components/msgErroInput';

import { Style } from './style';
import { setItem } from '../../../../../global/LocalStorage';
export default function email (props){

    const [email,setEmail] = useState('');
    const [emailErro,setEmailErro] = useState('');
    let {navigation} = props;
    onChangeText=(text)=>{
        setEmail(text);
    }

    validEmail=()=>{
        setEmailErro('')
        if(!Validation.minLength(email,1)){
            setEmailErro('o campo está vazio');
        }else if(!Validation.emailValid(email)){
            setEmailErro('email invalido')
        }else{
            nextPage();
        }
    }
    nextPage = ()=>{
        setItem('email',email)
        navigation.navigate('RegisterUser',{screen:'Name'})
    }

    return(
        <Container>
            <Form>
                <Label>email</Label>
                <Input
                onChangeText={text=>onChangeText(text)}/>
                 <MsgErroInput>{emailErro}</MsgErroInput>  
            </Form> 
             <Box> 
                 <ButtonNext
                 onPress={()=>validEmail()}
                 ></ButtonNext>
             </Box>
        </Container>
    )
}