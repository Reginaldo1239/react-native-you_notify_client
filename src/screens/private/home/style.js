import {StyleSheet} from 'react-native';
import {FONT_SIZE} from'../../../config_style';
export const Style=StyleSheet.create({

    header:{
        flexDirection:'row-reverse',
        marginTop:10,
        marginLeft:10
    },
    containerItem:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:10,
        borderBottomWidth:0.5,
        borderColor:'#ccc',
        paddingTop:10,
        paddingBottom:10
    }
    ,boxProfileItem:{
        width:'25%',
        height:70
        
    },
    boxTitleItem:{
        width:'75%',
    },
    boxTitleTextItem:{
        fontSize:FONT_SIZE
    }

}) 