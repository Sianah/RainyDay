import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import InputGoalScreen from './InputGoalScreen';
import TotalSavingsScreen from './TotalSavingsScreen';
import { GoalsProvider } from './GoalsContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GoalsProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InputGoal" component={InputGoalScreen} />
        <Stack.Screen name="TotalSavings" component={TotalSavingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </GoalsProvider>
  );
}




