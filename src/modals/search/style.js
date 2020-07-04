import {StyleSheet} from 'react-native';
import {GRAY_LIGHT,FONT_SIZE} from '../../config_style';
export const Style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GRAY_LIGHT
    },containerBoxInput:{
        flexDirection:'row',
        position:'relative',
       

    },boxIconBack:{
        width:'10%',
        marginTop:7,
        
    },boxIcon:{
        position:'absolute',
        marginTop:4,
        right:0,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'white',
        borderRadius:50
    },boxTextinput:{
        width:'95%'
    },
    TextInput:{
        backgroundColor:'white',
        borderRadius:50,
        fontSize:FONT_SIZE,
        paddingLeft:15,
        width:'95%'
    },listSearch:{
         flexDirection:'row',
         margin:10,
       
    },
    boxImg:{
        width:'25%'
    },
    Image:{
        height:50,
        width:'100%',
        resizeMode:'contain',
        borderRadius:50
    },
    boxTitle:{
        width:'75%',
        borderBottomWidth:1,
        borderColor:'white',
        paddingBottom:10
    },Text:{
        fontSize:18
    }
})  