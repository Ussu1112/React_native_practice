import React, { Component }from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Logo from '../project/logo';
import Form from '../project/Form';

export default class Login extends React.Component {  
    render(){
        return(
            <View style = {styles.container}>
                <Logo/>
                <Text style = {styles.title}>원광대 학점 관리 서비스</Text>
                <Form/>
                <View style ={styles.copyright}>
                    <Text>copyright</Text>
                </View>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container :{
    flex: 2,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent :'center'
    },
    title : {
        color : 'black',
        fontSize : 30
    },
    copyright :{
        fontSize : 15,
        alignItems:'center',
        justifyContent : 'center',
        borderTopWidth : 1,
        marginBottom : 20
    }
})