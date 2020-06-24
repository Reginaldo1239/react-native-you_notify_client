import React, { useState, useEffect } from 'react';
import {View,Text,ScrollView,TouchableWithoutFeedback } from 'react-native';
import Input from '../../../components/input';
import Label from '../../../components/label';
import {Style} from './style';
import Button from '../../../components/button';
import {clearAll,getItem} from '../../../global/LocalStorage';

export default  function Login ({navigation}){
    const [email,setEmail] = useState();
    const [begin,setBegin] = useState(true);

    useEffect(async ()=>{
        if(begin){
            clearAll();
        }
        console.log('await getIt' )
        console.log(await getItem('email'))
    })
return(
    <View style={Style.container}>
         <View style={Style.form}>
            <View style={Style.formGroup}>
                <Label>email</Label>
                <Input 
                value={email}
                onChangeText={(text)=>setEmail(text)}
                />
             </View>
             <View style={Style.formGroup}>
                <Button 
                title={'entrar'}
                ></Button> 
             </View>
        </View>
          <View style={Style.boxCenter}>
              <TouchableWithoutFeedback  onPress={()=>navigation.navigate('RegisterUser')}>
                    <View style={Style.boxTextCenter}>
                            <Text style={Style.textLink} >esqueci a senha</Text>
                    </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback  onPress={()=>navigation.navigate('RegisterUser',{ screen: 'name' })}>
                        <View  style={Style.boxTextCenter}>
                                <Text style={Style.textLink} >primeiro acesso</Text>
                        </View> 
              </TouchableWithoutFeedback>
          </View>
        </View> 
         
    )
} 