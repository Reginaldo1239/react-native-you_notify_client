import React from 'react';
import {Modal,View,Text,TextInput,TouchableHighlight,FlatLista,TouchableWithoutFeedback, Image } from 'react-native';
import IconBack from 'react-native-vector-icons/MaterialIcons'  
import Icon from 'react-native-vector-icons/Fontisto'  
import {Style} from './style';
import { FlatList } from 'react-native-gesture-handler';
export default function ModalSearch(props){
    let {visible,search,navigation} = props;
 
    return(
        <Modal
        animationType="slide"
       //transparent={true} 
        visible={visible} >
              <View style={Style.modal}>
               <View style={{flexDirection:'row',flexWrap:'wrap',margin:10}}>
                 <TouchableWithoutFeedback onPress={()=>props.onPressCloseModal()}>
               <View  style={Style.IconBack} >
                   <IconBack name='keyboard-backspace' size={30} color='black' />
               </View>
               </TouchableWithoutFeedback>
                 <View style={Style.searchModal}>
                       <TextInput
                       style={Style.inputSearch} 
                       onChangeText={text=>props.onChangeText(text)} 
                       value={search}
                        />
                        <TouchableWithoutFeedback onPress={()=>props.onPressSearch()}>
                       <View   style={Style.IconSearch}>
                       <Icon name="search" size={30} color="black" /> 
                        </View>
                        </TouchableWithoutFeedback>
                   </View>
                     
            </View> 
            <FlatList
                           data={DATA}
                           renderItem={({item})=><Item navigation={navigation} onPressCloseModal={()=>props.onPressCloseModal()} ></Item>}
                           keyExtractor={item=>item.id}
                           
                           />
            </View> 
       </Modal>
    )
} 

function Item (props){
  let {navigation} = props;


    return(
    <TouchableWithoutFeedback onPress={()=>{console.log(navigation.navigate('ProfileInfluencer')),props.onPressCloseModal()}}>
        <View style={Style.itemContainer}>
          <View style={Style.boxImg}> 
          <Image 
          style={Style.image}
          source={require('../../../../assets/imgs/bob.jpg')} />
           <Text style={{textAlign:'center'}}>youtube</Text>
          </View> 
          <View style={Style.boxProfile}>
              <Text style={{fontSize:19}}>reginaldo</Text>
          </View>
            </View> 
        </TouchableWithoutFeedback>      
    ) 
}

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
      id: '58694a0f-3da1-471f-bd96-145571e29da72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29dff72',
        title: 'Third Item',
      },
      {
        id: '58694as0f-3da1-471f-bd96-145571e29d7fs2',
        title: 'Third Item',
      },
      {
        id: '586a94a0f-3da1-471f-bd96-145571e29d72s',
        title: 'Third Item',
      },
      {
        id: '5h8694a0f-3da1-471f-bd96-145571e29d7a2',
        title: 'Third Item',
      },

  ];
  