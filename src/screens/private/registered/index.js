import React from 'react';
import {View,Text,ListView, Image,FlatList} from 'react-native';
import { Style } from './style';
export default function Registered(){

    
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '586942a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '518694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];
  
    return(
     <View >
         <FlatList
         data={DATA}
         renderItem={({item})=><Item item={item}></Item>}
         keyExtractor={item=>item.id}

         />
    
     
     </View> 
    )
}  

const Item=({a})=>{
    return (
        <View style={Style.ItemContainer}>
            <View style={Style.ItemBoxProfile} >
                <Image  style={Style.ItemImage} source={require('../../../assets/imgs/bob.jpg')} ></Image>
            </View>
            <View style={Style.ItemBoxTitle}>
    <Text style={Style.Text} >reginaldo {a}</Text>
            </View>
            
        </View> 
    )
}