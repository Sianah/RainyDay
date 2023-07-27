import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [goals, setGoals] = useState([]);

  useEffect(() => {
    const loadGoals = async () => {
      const storedGoals = await getData(); 
      if (storedGoals) {
        setGoals(storedGoals);
      }
    };

    loadGoals();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Goals List</Text>
      <Button title="Add Goal" onPress={() => navigation.navigate('InputGoal')} />
    </View>
  );
};

export default HomeScreen;
