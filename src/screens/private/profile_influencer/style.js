import {StyleSheet}from 'react-native';
import {RED_STRONG} from '../../../config_style';
export const Style = StyleSheet.create({
    boxImage:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center'
    }, 
    textCenter:{
            fontSize:19,
            textAlign:'center'
    },
    image:{
        width:'100%',
        height:'50%',
        resizeMode:'contain', 
        borderRadius:100
    },
       Button: {
      
        

    },
    boxButton:{
        width:'50%',
        backgroundColor:RED_STRONG,
        marginTop:10,
        marginLeft:'25%',
        padding:5,
        borderRadius:25,
     
      
    },
    boxButtonDisabled:{
        width:'50%',
        backgroundColor:RED_STRONG,
        marginTop:10,
        marginLeft:'25%',
        padding:5,
        borderRadius:25,
        opacity:0.5

    }
}) 