
import React, { useState, useEffect } from 'react';
import {View,TextInput,Modal,Text,TouchableHighlight,BackHandler ,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'  
import IconBack from 'react-native-vector-icons/MaterialIcons' ; 
import IconSettings from 'react-native-vector-icons/MaterialIcons';

import ModalSearch from './modal_search/index';


import { Style } from './style';

export default function Home1 (props){
    let {navigation} = props;
    const [search,setSearch] = useState('');
    const [enabledModal,setEnabledModal] = useState(false);
    const [enabledModalSettings,setEnabledModalSettings] = useState(false);

     return(
        <View style={{flex:1}}>
            <View  style={ Style.ContainerRigth}>
                <View style={Style.search}>
                <TouchableWithoutFeedback onPress={()=>setEnabledModalSettings(true)}>
                    <View  style={Style.IconSearch}>
                        <Icon name="player-settings" size={30} color="black"></Icon>
                        </View >
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>setEnabledModal(true)}>
                    <View  style={Style.IconSearch}>
                        <Icon name="search" size={30} color="black" />
                    </View >
                    </TouchableWithoutFeedback>
                
                 </View>
            </View> 
            <ModalSearch 
            navigation={navigation}
            visible={enabledModal} 
            onChangeText={text=>setSearch(text)}
            search={search} 
            onPressSearch={()=>console.log('search')}
            onPressCloseModal={()=>setEnabledModal(false)} ></ModalSearch>
</View>
        )
} 
 