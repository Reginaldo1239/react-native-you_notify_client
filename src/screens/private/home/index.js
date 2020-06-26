import React, { useEffect,useState } from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import {Style} from './style';
export default function Home(){
    const [datass,setDatass] = useState([]);
    const [begin,setBegin] = useState(true);
    const DATA = [
        {
          title: "Main dishes",
          data: ["Pizza", "Burger", "Risotto"]
        },
        {
          title: "Sides",
          data: ["French Fries", "Onion Rings", "Fried Shrimps"]
        },
        {
          title: "Drinks",
          data: ["Water", "Coke", "Beer"]
        },
        {
          title: "Desserts",
          data: ["Cheese Cake", "Ice Cream"]
        }
      ];
      
   
    

      useEffect(()=>{
          if(begin){
        let datas = datass;
        for(let i=0;i<20;i++){
            datas.push({id:i,title: i})
          }
          setDatass(datas);
  setBegin(false);
     
        }
      })
 
      const Item = ({ item }) => (
        <TochableWithoutFeedback onPress={()=>console.log('123')} >
        <View style={Style.container} >
           <View style={Style.boxProfile} >
                <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:100}} source={require('../../../assets/imgs/bob.jpg')}/>
           </View> 
           <View style={Style.boxTitle} > 
               <Text style={Style.boxTitleText}>reginaldo</Text>
               <Text style={{fontSize:10 }} >{item.id}</Text>
           </View>
        </View>
        </TochableWithoutFeedback>
      );
     
    return(
        <View > 
        <FlatList 
        data={datass}       
        renderItem={({ item }) => <Item item={item}/>} 
        keyExtractor={item => item.id.toString()}
        onEndReached={()=>console.log('123457')} 
        onEndReachedThreshold={0.3}
      /> 
      </View>  
     ) 
}   