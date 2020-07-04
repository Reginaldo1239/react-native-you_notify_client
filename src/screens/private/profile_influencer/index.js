import React from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import Button from '../../../components/button';
import { WebView } from 'react-native-webview';
 
import {Style} from './style';
export default function ProfileInfluencer(){
    return( 
 <View style={{flex:1,flexDirection:'column',marginLeft:10,marginRight:10}}>
    <View style={Style.boxImage}>
          <Image
             style={Style.image}
             source ={require('../../../assets/imgs/bob.jpg')}
            />
            <View>
             <Text style={Style.textCenter}>reginaldosssssssssssss</Text>
                <Text style={Style.textCenter}>youtube</Text>
                </View>
                
    </View> 
         <View style={{flex:2,width:'100%',flexDirection:'column'}}>
                        <View style={Style.boxButton} > 
                                <TouchableWithoutFeedback onPress={()=>console.log('123')} >
                                        <Text style={{color:'white',fontSize:22,textAlign:'center'}}>seguir</Text>
                                 </TouchableWithoutFeedback>
                        </View>
                        <View style={Style.boxButtonDisabled} > 
                                <TouchableWithoutFeedback onPress={()=>console.log('123')} >
                                         <Text style={{color:'white',fontSize:22,textAlign:'center'}}>seguindo</Text>
                                 </TouchableWithoutFeedback>
                        </View>
                    
            
                </View>
        </View>
    ) 
} 