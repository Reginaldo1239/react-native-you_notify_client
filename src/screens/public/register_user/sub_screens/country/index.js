import React from 'react';
import {TextInput,StyleSheet} from 'react-native';
import Form from '../../components/form/index';
import Container from '../../components/container';
import Box from '../../components/box';
import ButtonNext from '../../../../../components/button_next';
import Label from '../../../../../components/label';

import RNPickerSelect,{defaultStyles} from 'react-native-picker-select';


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 20,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: '#ccc',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
      backgroundColor:'white'
    },
  });

  const placeholder = {
    label: 'selecione um pais',
    value: null,
    color: '#9EA0A4',

  };
  
  


export default function Country(){
    return (
        <Container>
            <Form>
          <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          style={pickerSelectStyles}
          placeholder ={placeholder} 
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Brasil', value: 'BRL' },
                { label: 'Estados unidos', value: 'USR' },
               
            ]}
         
        />
            </Form>
            <Box>
                <ButtonNext></ButtonNext>
            </Box>
        </Container>
    )
}