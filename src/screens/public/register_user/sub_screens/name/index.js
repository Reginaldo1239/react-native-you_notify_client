import React, { useState } from 'react';
import Validation from '../../../../../global/validation';
import Container from '../../components/container';
import Form from '../../components/form';
import Box from  '../../components/box';
import Label from '../../../../../components/label';
import Input from '../../../../../components/input';
import ButtonNext from '../../../../../components/button_next';
import MsgErroInput from '../../../../../components/msgErroInput'
import {setItem } from '../../../../../global/LocalStorage'
export default function Name(props){
    let {navigation }= props;
    const [name,setName] = useState('');
    const [nameErro,setNameErro] = useState('');

   const validName=()=>{
        setNameErro('');
        if(!Validation.minLength(name,1)){
            setNameErro('o campo está vazio');
        }else{
            setItem('name',name)
            navigation.navigate('RegisterUser',{screen:'DateOfBirth'})
        }
    }
    return(
        <Container>
            <Form>
                <Label>nome</Label>
                <Input
                    onChangeText={text=>setName(text)}
                ></Input>
                <MsgErroInput>{nameErro}</MsgErroInput>
            </Form>
            <Box>
                <ButtonNext
                onPress={()=>{validName()}}
                ></ButtonNext>
            </Box>
        </Container>
    )
}