import {StyleSheet} from 'react-native';
import {FONT_SIZE} from'../../../config_style';
export const Style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:10,
        borderBottomWidth:0.5,
        borderColor:'#ccc',
        paddingTop:10,
        paddingBottom:10
    }
    ,boxProfile:{
        width:'25%',
        height:70
        
    },
    boxTitle:{
        width:'75%',
    },
    boxTitleText:{
        fontSize:FONT_SIZE
    }

}) 