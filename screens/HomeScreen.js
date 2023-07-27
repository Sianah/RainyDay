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
          <View>
            <Text>{item.goalName}: ${item.amountRequired}</Text>
            {/* Display other attributes as needed */}
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

