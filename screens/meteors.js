import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default class MeteorsScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>
            tela Meteoros
        </Text>
      </View>
  );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})