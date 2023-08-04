import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BudgetListScreen from "./Components/BudgetListScreen";
import BudgetScreen from "./Components/BudgetScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BudgetScreen' component={BudgetScreen} />
        <Stack.Screen name='BudgetListingScreen' component={BudgetListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;