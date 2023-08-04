// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/ContactAdd";
import Show from "./components/ContactUpdate";
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./components/HomeScreen";
import Profile from './components/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'Contact List',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25
          }

        }} />
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Add New Contact',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 22
          }
        }} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;