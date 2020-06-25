import {StyleSheet} from 'react-native';
import {GRAY_LIGHT} from '../../../../config_style';
export const Style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GRAY_LIGHT
    },
    form:{
        marginLeft:10,
        marginRight:10,
        marginTop:'50%',
        
    },
    formGroup:{
        marginTop:10,
        width:'100%'
    },
    boxCenter:{
        alignItems:'center'
    },
    boxTextCenter:{
        marginTop:40
    },
    textLink:{
        fontSize:20,
        textDecorationLine:'underline'
    }


})   