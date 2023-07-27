import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import InputGoalScreen from './InputGoalScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InputGoal" component={InputGoalScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;



