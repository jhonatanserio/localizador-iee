import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default class AppRastreador extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>
            tela appRastreador
        </Text>
      </View>
  );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})