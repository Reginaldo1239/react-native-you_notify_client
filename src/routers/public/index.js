import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/public/login';
import Name from '../../screens/public/register_user/sub_screens/name';
import Email from '../../screens/public/register_user/sub_screens/email';
import DateOfBirth from '../../screens/public/register_user/sub_screens/date_of_birth'
import Country from '../../screens/public/register_user/sub_screens/country';
import Password from '../../screens/public/register_user/sub_screens/password';
import Password1 from '../../screens/public/login/password'
export default function RouterPublic(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
       
          headerMode={'none'}>
            <Stack.Screen 
            name='/' component= {Password1}/>
        
              <Stack.Screen 
            name='RegisterUser' component= {RegisterUser}/>
                
        </Stack.Navigator>
    ) 
}

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50000,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

function RegisterUser(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
        
        headerMode={'none'} 
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            gestureDirection:'vertical'
          }}
     
        >      
            <Stack.Screen 
        name='Email' component= {Email}
   
        />
        <Stack.Screen
        name='Name' component = {Name}
        />
        <Stack.Screen 
        name='DateOfBirth'
        component ={DateOfBirth}
        />
        <Stack.Screen 
        name='Password' component={Password}/>
        </Stack.Navigator>
    )

}