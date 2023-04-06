import React, { Component } from 'react';
import { View,Text,StyleSheet,ImageBackground,Image,SafeAreaView, Platform,TouchableOpacity, Touchable } from 'react-native';

export default class HomeScreen extends Component {
  render(){
    return (
      <View style={style.container}>
      <SafeAreaView style={style.SafeArea}/>
        <ImageBackground style={style.backgroundImg} source={require("../assets/bg.png")}>
          <View>
          <TouchableOpacity style={style.button} onPress={()=>this.props.navigation.navigate("iss")}>
            <Text style={style.touchableOtext}>
              localizacao EEI
            </Text>
            <Image source={require("../assets/iss_icon.png")}style={style.iconImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={()=>this.props.navigation.navigate("apprastrea")}>
            <Text style={style.touchableOtext}>
              appRastreador EEI
            </Text>
            <Image source={require("../assets/rocket_icon.png")}style={style.iconImg}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={()=>this.props.navigation.navigate("meteouro")}>
            <Text style={style.touchableOtext}>
              Meteoros
            </Text>
            <Image source={require("../assets/meteor_icon.png")}style={style.iconImg}/>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
  );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    backgroundImg:{
      flex:1,
      resizeMode:"cover"
    },
    SafeArea:{
      marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
      button:{
        zIndex:1,
        marginLeft:100,
        height:100,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white",
      },
      touchableOtext:{
        color:"purple",
        fontSize:17,
        fontWeight:500
      },
      iconImg:{
        position:"absolute",
        width:100,
        height:100,
        marginRight:20,
        marginTop:-80
      }
})