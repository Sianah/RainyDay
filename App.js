import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import InputGoalScreen from './InputGoalScreen';
import TotalSavingsScreen from './TotalSavingsScreen';
import {Button} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
            headerLeft: () => (
              <Button
                title="Total Saving"
                onPress={() => navigation.navigate('TotalSavings')}
              />
            ),
          })}
        />
        <Stack.Screen name="InputGoal" component={InputGoalScreen} />
        <Stack.Screen 
          name="TotalSavings" 
          component={TotalSavingsScreen}
          initialParams={{ goals: [] }}  // Set default goals as empty array // Set default goals as empty array
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



