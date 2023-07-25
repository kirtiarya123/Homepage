import React from 'react';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './Screen/Homepage';
import Chatapp from './Screen/Chatapp';


const Stack = createNativeStackNavigator();


const App = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Chatapp" component={Chatapp} />
    </Stack.Navigator>
  </NavigationContainer>
  )}

export default App;
