import React from 'react';
import {View,Text,Image} from 'react-native'
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
         <View style={{flex:2,width:'100%',flexDirection:'row'}}>
                        <View style={Style.boxButton} >
                                <Button
                                title={'seguir'}
                                onPress={()=>console.log('a')}
                                ></Button>
                        </View>
                    
            
                </View>
        </View>
    ) 
} 