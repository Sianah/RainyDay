import TotalSavingsScreen from './path_to_your_screens_folder/TotalSavingsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InputGoal" component={InputGoalScreen} />
        <Stack.Screen name="TotalSavings" component={TotalSavingsScreen} 
          initialParams={{ goals: [] }}  // Set default goals as empty array
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;



