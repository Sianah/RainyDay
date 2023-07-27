import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Goals List</Text>
      <Button title="Add Goal" onPress={() => navigation.navigate('InputGoal')} />
    </View>
  );
};

export default HomeScreen;
