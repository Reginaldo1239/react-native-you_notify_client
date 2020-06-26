import {StyleSheet} from 'react-native';
import {GRAY_LIGHT }from '../../../../config_style';

export const Style = StyleSheet.create({
    modal:{
        backgroundColor:GRAY_LIGHT,
        flex:1
    },
    searchModal:{
        width:'90%'

    },
    inputSearch:{
        borderRadius:15,
        backgroundColor:'white',
        width:'100%',
        fontSize:25, 
        padding:0,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
    },IconSearch:{
        position:'absolute',
        top:2,
        right:1,
        backgroundColor:'white',
        padding:5,
        borderRadius:100,
    },
    IconBack:{ 
        width:'10%',
        marginTop:7,
        
    },
    itemContainer:{
        flexDirection:'row',
      
        borderTopWidth:0.5,
        borderColor:'#ccc',
        paddingTop:5,
        paddingBottom:5

    }, 
    boxImg:{
        width:'20%'

    },
    boxProfile:{
        width:'80%'
    },
    image:{
        width:'100%',
        height:40,
        resizeMode:'contain',
        borderRadius:100

    }
})