import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
    <View style={styles.screen}>
      <TextInput 
        placeholder="Goal Name:" 
        value={goalName}
        onChangeText={setGoalName}
        style={styles.input}
      />
      <TextInput 
        placeholder="Amount Required:" 
        value={amountRequired}
        onChangeText={setAmountRequired}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput 
        placeholder="Enter when you would like to complete this goal"
        value={estimatedCompletion}
        onChangeText={setEstimatedCompletion}
        style={styles.input}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default InputGoalScreen;





