import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const InputGoalScreen = ({ route, navigation }) => {
  const [goalName, setGoalName] = useState('');
  const [amountRequired, setAmountRequired] = useState('');
  const [estimatedCompletion, setEstimatedCompletion] = useState('');

  const { setGoals } = route.params;

  const handleAddGoal = () => {
    // Code to add a goal
    setGoals(prevGoals => [...prevGoals, { goalName, amountRequired, estimatedCompletion }]);
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
      <Button title="Add Goal" onPress={handleAddGoal} />
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





