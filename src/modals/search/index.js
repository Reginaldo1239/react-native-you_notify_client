import React,{useEffect, useState} from 'react';
import {View,Text,Modal,TextInput,ListView,Image,TouchableWithoutFeedback,Keyboard,FlatList} from 'react-native';
import {get} from '../../api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Style} from './style';
export default function search(props){
    let {visible,navigation } = props;
    let [items,setItems] = useState([])
    useEffect(()=>{
     Keyboard.addListener("keyboardDidHide",()=>search());
      

    },[])   

    useEffect(()=>{
            setItems([])
    },[visible])
 const search= async ()=>{
    let listInfluencers= await get('/influencer/search?search=reginaldo');
    if(listInfluencers.status==200){
        setItems( await listInfluencers.data);    
        console.log(await listInfluencers.data)
    }
    }   
    return(  
        <Modal  
        visible={visible}
        >
        <View style={Style.container}>
            <View style={Style.containerBoxInput}>
                <View style={Style.boxIconBack}>
                    <TouchableWithoutFeedback onPress={()=>props.closeModal()}>
                <Icon name="keyboard-backspace" size={40} color="black" />
                </TouchableWithoutFeedback>
                </View>
                <View style={Style.boxTextinput}>
                <TextInput style={Style.TextInput} />
                </View> 
                <View style={Style.boxIcon}>
                <TouchableWithoutFeedback onPress={()=>search()}>
                     <Icon name="search" size={40} color="black" />
                     </TouchableWithoutFeedback>
                </View>  
            </View>

                <FlatList
                data={items}
                renderItem={({item})=><Item  
                {...item} 
                navigation={navigation}
                 closeModal={()=>props.closeModal()} ></Item>}
                keyExtractor={item => item.id_social_network}
                
                >
                </FlatList> 
                
           
            </View> 
        </Modal> 
       
    )
} 

function Item (props){
    console.log('props')
    console.log(props)
    let {title,navigation} =props;
    return (
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('ProfileInfluencer'),props.closeModal()}}>
        <View style={Style.listSearch} >
        <View style={Style.boxImg}> 
            <Image style={Style.Image} source={require('../../assets/imgs/bob.jpg')} ></Image>
         </View>
        <View style={Style.boxTitle}>
    <Text style={Style.Text} >{title}</Text>
             </View> 
   </View> 
   </TouchableWithoutFeedback>
    )
}