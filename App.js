import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from'./screens/Home';
import IssLocation from './screens/issLocation';
import MeteorsScreen from './screens/meteors';
import AppRastreador from './screens/issInfo.js';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="home" component={HomeScreen}/>
    <Stack.Screen name="iss" component={IssLocation}/>
    <Stack.Screen name="meteouro" component={MeteorsScreen}/>
    <Stack.Screen name="apprastrea" component={AppRastreador}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
