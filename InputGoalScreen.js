import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InputGoalScreen = ({ route, navigation }) => {
  const { setGoals } = route.params;

  const [goalName, setGoalName] = useState('');
  const [amountRequired, setAmountRequired] = useState('');
  const [estimatedCompletion, setEstimatedCompletion] = useState('');

  const saveGoal = () => {
    const newGoal = {
      goalName,
      amountRequired: parseFloat(amountRequired),
      estimatedCompletion,
      // ... Add other attributes as needed
    };

    setGoals(prevGoals => [...prevGoals, newGoal]);
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
        placeholder="Enter when you want to complete this goal"
      />

      <Button title="Save Goal" onPress={saveGoal} />
    </View>
  );
}

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




