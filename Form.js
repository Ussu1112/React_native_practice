import React, { Component }from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class form extends React.Component {  
    render(){
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = "웹정보서비스 아이디"
                    placeholderTextColor = "black"
                    />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = "웹정보서비스 비밀번호"
                    placeholderTextColor = "black"
                    />
                <TouchableOpacity style = {styles.Button}>
                <Text style = {styles.buttonText}>로그인</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center'
    },
    inputbox: {
        width : 300,
        backgroundColor :'rgba(01,87,86,0.3)',
        borderRadius :25,
        paddingHorizontal : 16,
        fontSize : 24,
        color : '#f0f0f0',
        marginVertical : 10,
        paddingVertical : 10
    },
    Button : {
        width : 300,
        backgroundColor :'rgba(03,160,86,0.3)',
        borderRadius :25,
        marginVertical : 10,
        paddingVertical : 10,
        marginTop : 40
    },
    buttonText : {
        fontSize : 16,
        fontWeight :'500',
        color : 'black',
        textAlign : 'center'
    }   
    
});