import React from 'react';
import { WebView } from 'react-native-webview';
export default function MyWebView(props){
    let{uri} = props;
    return(
        <WebView source={{ uri: uri }} /> 
    )
}