import React from 'react';
import {View,Text} from 'react-native';
import {Style} from './style';
import Label from '../../../../components/label';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import MsgErroInput from '../../../../components/msgErroInput';
export default function Password(){

    return(
        <View>
            <View style={Style.form}>
                <Label>senha</Label>
                <Input
                 password={true}
                ></Input>
    <MsgErroInput>{'123'}</MsgErroInput>
                <View style={Style.box}>
    
                <Button
                title={'entrar'}
                ></Button>
                </View>
            
            </View>

        </View>
    )
} 