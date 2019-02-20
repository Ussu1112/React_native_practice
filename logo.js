import React, { Component }from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';


export default class Logo extends React.Component {  
    render(){
        return(
            <View>
                <Image style = {styles.Image} source={require('./img/logo.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Image:{
        width : 100,
        height : 120,
        justifyContent : 'center',
        alignItems : 'center'
    }
})