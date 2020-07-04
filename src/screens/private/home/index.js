import React, { useEffect,useState } from 'react';
import {View,Text,FlatList,Image,ScrollView,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalSearch from '../../../modals/search';
import {Style} from './style';



export default function Home(props){
    let {navigation} = props;
    const [datass,setDatass] = useState([]);
    const [begin,setBegin] = useState(true);
    const [visibleModalSearch,setVisibleModalSearch] = useState(false);
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
    
        <View style={Style.containerItem} >
           <View style={Style.boxProfileItem} >
                <Image style={{width:'100%',height:'100%',resizeMode:'contain',borderRadius:100}} source={require('../../../assets/imgs/bob.jpg')}/>
           </View> 
           <View style={Style.boxTitleItem} > 
               <Text style={Style.boxTitleTextItem}>reginaldo</Text>
               <Text style={{fontSize:10 }} >{item.id}</Text>
           </View>
        </View>
   
      );
     
    return(
        <ScrollView> 
          <ModalSearch 
          visible={visibleModalSearch}
          closeModal={()=>setVisibleModalSearch(false)}
          navigation={navigation}
          ></ModalSearch> 
          <View style={Style.header}>
            <TouchableWithoutFeedback onPress={()=>setVisibleModalSearch(true)}>
               <Icon name="search" size={40} color="black" />
            </TouchableWithoutFeedback>
          </View>
        <FlatList 
        data={datass}       
        renderItem={({ item }) => <Item item={item}/>} 
        keyExtractor={item => item.id.toString()}
        onEndReached={()=>console.log('123457')} 
        onEndReachedThreshold={0.3}
      /> 
      </ScrollView>   
     ) 
}   
