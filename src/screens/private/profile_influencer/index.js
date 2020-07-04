import React, { useEffect, useState } from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import IconBack from 'react-native-vector-icons/MaterialIcons';

import Button from '../../../components/button';
import { WebView } from 'react-native-webview';
import {get,post,del,put} from '../../../api';
 
import {Style} from './style';
import Validation from '../../../global/validation';
export default function ProfileInfluencer(props){
        let {navigation }= props;
        const [infoInfluencer,setInfoInfluencer] = useState({});
        const [idSubscriber,setIdSubscriber] = useState(null);
        const [statusNotify,setStatusNotify]= useState(false);
        useEffect(()=>{
                getInfoInfluencer()
        },[])
      const  getInfoInfluencer = async ()=>{
                let infoInfluencer = await get('/influencer/detail?id_social_network=1');
                if(infoInfluencer.status==200){
                        infoInfluencer= await infoInfluencer.data;
                        console.log(infoInfluencer)
                        setInfoInfluencer(infoInfluencer[0])
                        setIdSubscriber(infoInfluencer[0].id_subscriber)
                        setStatusNotify(infoInfluencer[0].notify)
                } 
        }
        // quando o usuario nunca seguio o influencer, nesse caso a variavel infoInfluencer.id_subscriber retorna null
        const subscriberInfluencer = async ()=>{
                let body= {"id_social_network": 1}
                let subscriberInInfluencer = await post('/subscriber',body);
                console.log(typeof idSubscriber)
                        if(subscriberInInfluencer.status==200){
                                subscriberInInfluencer =  await subscriberInInfluencer.data;
                                let  infoInfluencer = infoInfluencer;
                                setIdSubscriber(subscriberInInfluencer.insertId)
                              
                        }
        }
        const unsubscriberInfluencer = async ()=>{
                let body = {id_social_network:1};
                let unsubscriberInfluencer = await del('/subscriber',body);
                        if(unsubscriberInfluencer.status==200){
                                unsubscriberInfluencer = await unsubscriberInfluencer.data;
                                console.log(unsubscriberInfluencer)
                                console.log(typeof idSubscriber)
                                setIdSubscriber(false)
                                if(unsubscriberInfluencer.affectedRows>0){
                                        
                                       
                                }
                        }
        }
        const alterStatusNotify = async ()=>{
                let body = {id_subscriber:130,new_status_notify:!statusNotify}
                let alterStatusNotify = await put('/subscriber',body);

                        if(alterStatusNotify.status==200){
                                alterStatusNotify   = await alterStatusNotify.data;
                               setStatusNotify(!statusNotify)
                        }
                console.log(alterStatusNotify)
                        
                
        }

    return(  
 <View style={{flex:1,flexDirection:'column',marginLeft:10,marginRight:10}}>
         <TouchableWithoutFeedback onPress={()=>{navigation.goBack()}}>
                        <IconBack name="keyboard-backspace" size={35} color="black" />
                 </TouchableWithoutFeedback>
    <View style={Style.boxImage}>
          <Image 
             style={Style.image}
             source ={require('../../../assets/imgs/bob.jpg')}
            />
            <View>
             <Text style={Style.textCenter}>{infoInfluencer.title}</Text>
                         <Text style={Style.textCenter}>{infoInfluencer.name_social_network}</Text>
                         <Text style={Style.textCenter}>{infoInfluencer.subscribers}</Text>
                </View>
               
    </View> 
         <View style={{flex:1,width:'100%',flexDirection:'column'}}>
                   
       {  idSubscriber==null || idSubscriber==false?(
                        <View style={Style.boxButton} > 
                        <TouchableWithoutFeedback onPress={()=>subscriberInfluencer()} >
                                <Text style={{color:'white',fontSize:22,textAlign:'center'}}>seguir</Text>
                         </TouchableWithoutFeedback>
                        </View>
                        ):(
                                <>
                <View style={Style.boxButtonDisabled} > 
                        <TouchableWithoutFeedback onPress={()=>unsubscriberInfluencer()} >
                                 <Text style={{color:'white',fontSize:22,textAlign:'center'}}>seguindo</Text>
                         </TouchableWithoutFeedback>
                </View>
                                        {statusNotify?(
                <View style={Style.boxButtonDisabled}> 
                        <TouchableWithoutFeedback onPress={()=>alterStatusNotify()} >
                                <Text style={{color:'white',fontSize:17,textAlign:'center'}}>desativar notificação</Text>
                         </TouchableWithoutFeedback>
                        </View> ):(
                                 <View style={Style.boxButton}> 
                                 <TouchableWithoutFeedback onPress={()=>alterStatusNotify()} >
                                         <Text style={{color:'white',fontSize:17,textAlign:'center'}}>ativar notificação</Text>
                                  </TouchableWithoutFeedback>
                                 </View>
                        )}
                </>
                        )}

                      
                     
                        
                </View>
                  
        </View> 
    ) 
} 

       