import {StyleSheet} from 'react-native';
import {FONT_SIZE} from '../../../config_style';

export const Style  = StyleSheet.create({
    ItemContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingBottom:10,
        paddingTop:10,
        borderBottomWidth:0.3,
        borderColor:'#ccc'
    },
    ItemImage:{
        width:'100%',
        height:60,
        resizeMode:'contain',
        borderRadius:100,
    },
    ItemBoxProfile:{
        width:'25%',
        
        
    },ItemBoxTitle:{
        width:'75%',
       
       
    },
    Text:{
        fontSize:FONT_SIZE
    } 
}) 