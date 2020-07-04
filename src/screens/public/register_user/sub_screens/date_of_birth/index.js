import React,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import {TouchableWithoutFeedback,View,TextInput,Keyboard} from 'react-native';
import Container from '../../components/container';
import Form from '../../components/form';
import Box from '../../components/box';
import ButtonNext from '../../../../../components/button_next';
import Input from '../../../../../components/input';
import Label from '../../../../../components/label';
import MsgErroForm from '../../../../../components/msgErroInput';
import Validation from '../../../../../global/validation';
import {formatToClient} from '../../../../../global/date';
import {setItem } from '../../../../../global/LocalStorage';

export default function DateOfBirth(props){
  let {navigation} = props;
    let inputDate = React.createRef();
    const [dateInput,setDateInput] = useState('');
    const [dateError,setDateError] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
 
 
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); 
        setDate(currentDate);
        setDateInput(formatToClient(currentDate))
        setShow(false);
        
      };

      onFocuss =()=>{
        setShow(true) 
        _textInput.blur();
      } 
    const  validDate=()=>{

        setDateError('');
          if(!Validation.minLength(dateInput,1)){
            setDateError('selecione a sua data de nascimento');
          }else{
            setItem('dateOfBirth',dateInput)
            navigation.navigate('RegisterUser',{screen:'Password'});
  
          }
      }
return( 
<Container> 
    <Form> 
        <Label>data de nascimento</Label>
             <TextInput 
                style={{backgroundColor:'white',borderRadius:15,fontSize:20}}
                ref={component => _textInput = component}
                defaultValue={dateInput}
                onFocus={()=>{onFocuss()}}
                 />   
               <MsgErroForm>{dateError}</MsgErroForm>
        {show&&
         <DateTimePicker   
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={(event,select)=>onChange(event,select)}
        />}
     </Form>
            <Box> 
                <ButtonNext
                onPress={()=>validDate()}
                ></ButtonNext>
            </Box>
        </Container>
)
}



