import React, { useState } from 'react';
import {View,ScrollView} from 'react-native';
import Label from '../../../components/label';
import Input from '../../../components/input';
import MsgErrorInput  from '../../../components/msgErroInput';
import Button from '../../../components/button';
import {Style} from './style';
export default function Profile(){
    const [passwordCurrent,setPasswordCurrent] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const [passwordCurrentError,setPasswordCurrentError]=useState('');
    const [newPasswordError,setPasswordError] = useState('');
    const [confirmPasswordError,setConfirmPasswordError] = useState('');
    
    validForm = ()=>{
        console.log('123')
    }
        
    return(
        <ScrollView>
            <View style={Style.form}>
                <View style={Style.formGroup}>
                <Label>senha atual</Label>
                <Input
                 onChangeText={text=>setPasswordCurrent(text)}
                 value={passwordCurrent}
                 password={true}
                />
                <MsgErrorInput>{passwordCurrentError}</MsgErrorInput>
         </View>
    <View style={Style.formGroup}>
                <Label>nova senha</Label>
                <Input
                onChangeText ={text=>setNewPassword(text)}
                value={newPassword}
                password={true}
                />
                 <MsgErrorInput>{passwordCurrentError}</MsgErrorInput>
    </View>
        <View style={Style.formGroup}>
                <Label>confirmar senha </Label>
                <Input
                onChangeText={text=>setConfirmPassword(text)}
                value={confirmPassword}
                password={true}
                />
                    <MsgErrorInput>{confirmPasswordError}</MsgErrorInput>
        </View>
        <View style={Style.formGroup}>
            <Button 
            title={'salvar'}
            onPress={()=>validForm()}
            ></Button>
        </View>
            </View>
        </ScrollView>

    )

}