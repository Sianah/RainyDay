import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useGoals } from './GoalsContext'; // Ensure this path points to your GoalsContext.js file


const InputGoalScreen = ({ route, navigation }) => {
  const { existingGoal } = route.params || {};
  const { goals, setGoals } = useGoals();
  const [goalName, setGoalName] = useState('');
  const [amountRequired, setAmountRequired] = useState('');
  const [estimatedCompletion, setEstimatedCompletion] = useState('');

  


  const handleAddGoal = () => {
    // Code to add a goal
    setGoals(prevGoals => {
      const newGoals = [...prevGoals, { goalName, amountRequired, estimatedCompletion }];
      return newGoals;
  });
  
    navigation.goBack();
  };

  const handleSaveGoal = () => {
    if (existingGoal) {
      // This means we are in edit mode
      const updatedGoals = [...goals];
      updatedGoals[route.params.goalIndex] = { goalName, amountRequired, estimatedCompletion };
      setGoals(updatedGoals);
    } else {
      // This is add new goal mode
      setGoals(prevGoals => [...prevGoals, { goalName, amountRequired, estimatedCompletion }]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Goal Name:</Text>
      <TextInput 
        style={styles.inputBox}
        value={goalName}
        onChangeText={setGoalName}
        placeholder="Enter goal name"
      />

      <Text style={styles.label}>Amount Required:</Text>
      <TextInput 
        style={styles.inputBox}
        value={amountRequired}
        onChangeText={setAmountRequired}
        placeholder="Enter required amount"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Estimated Completion By:</Text>
      <TextInput 
        style={styles.inputBox}
        value={estimatedCompletion}
        onChangeText={setEstimatedCompletion}
        placeholder="Enter when you would like to complete this goal"
      />
      <Button title={existingGoal ? "Update Goal" : "Add Goal"} onPress={handleSaveGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  }
});

export default InputGoalScreen;





