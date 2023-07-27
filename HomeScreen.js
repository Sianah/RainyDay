import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [goals, setGoals] = useState([]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList 
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.goalName}</Text>
            <Text>Amount Required: ${item.amountRequired}</Text>
            <Text>Estimated Completion By: {item.estimatedCompletion}</Text>
          </View>
        )}
      />

      <Button 
        title="Add New Goal" 
        onPress={() => navigation.navigate('InputGoal', { setGoals })}
      />
    </View>
  );
}

export default HomeScreen;



