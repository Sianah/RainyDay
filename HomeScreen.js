import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [goals, setGoals] = useState([]);

  navigation.setOptions({
    title: 'Home',
    headerLeft: () => (
      <Button
        title="Total Saving"
        onPress={() => navigation.navigate('TotalSavings', { goals })}
      />
    ),
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList 
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.goalBox}>
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

const styles = StyleSheet.create({
  goalBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 15,
      borderRadius: 8,
      marginBottom: 20,
      backgroundColor: '#f9f9f9',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
  },
});




export default HomeScreen;



