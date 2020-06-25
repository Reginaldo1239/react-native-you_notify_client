import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Email from '../../../screens/public/login/email';
import Password from '../../../screens/public/login/password';

export default function RouterLogin (){
    const Stack = createStackNavigator();
    return( 
        <Stack.Navigator
        headerMode={'none'}>
            <Stack.Screen name='Login/Email'component={Email} ></Stack.Screen>
            <Stack.Screen name='Login/Password'component={Password} ></Stack.Screen>
        </Stack.Navigator>
    )
}