import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import EmailLogin from '../../screens/public/login/email/index';
import Name from '../../screens/public/register_user/sub_screens/name';
import Email from '../../screens/public/register_user/sub_screens/email';
import DateOfBirth from '../../screens/public/register_user/sub_screens/date_of_birth'
import Country from '../../screens/public/register_user/sub_screens/country';
import Password from '../../screens/public/register_user/sub_screens/password';
import Password1 from '../../screens/public/login/password'

import Home from '../../screens/private/home';
import Registered from '../../screens/private/registered';

 

export default function RouterPublic(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
          headerMode={'none'}>
            <Stack.Screen  
            name='Login' component= {Private}/>     
              <Stack.Screen 
            name='RegisterUser' component= {RegisterUser}/>
              <Stack.Screen name='Home' component = {Home}/>
        </Stack.Navigator>
    ) 
}
 
 function Private(){
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator()
  return (
      <Tab.Navigator
      headerMode={'none'}>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Registered' component ={ Registered}/>
      </Tab.Navigator>
  )
 }


function RouterLogin(){
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator
    headerMode={'none'}>
        <Stack.Screen name='/' component={EmailLogin} ></Stack.Screen>
        <Stack.Screen name='Login/Password' component={Password1} ></Stack.Screen>
    </Stack.Navigator>
  )
}
 

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