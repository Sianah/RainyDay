import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import InputGoalScreen from './screens/InputGoalScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InputGoal" component={InputGoalScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;