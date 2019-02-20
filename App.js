import React, { Component }from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from '../project/Login';

export default class App extends React.Component {  
  render() {    
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor = "#FFF"
          barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent :'center'
  },
  title : {
    color: 'black',
    fontSize : 30
  }
});
