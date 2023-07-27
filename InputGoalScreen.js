import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const InputGoalScreen = ({ route, navigation }) => {
  const { setGoals } = route.params;

  const [goalName, setGoalName] = useState('');
  const [amountRequired, setAmountRequired] = useState('');

  const saveGoal = () => {
    const newGoal = {
      goalName,
      amountRequired: parseFloat(amountRequired),
      // ... Add other attributes as needed
    };

    setGoals(prevGoals => [...prevGoals, newGoal]);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Goal Name:</Text>
      <TextInput 
        value={goalName}
        onChangeText={setGoalName}
      />

      <Text>Amount Required:</Text>
      <TextInput 
        value={amountRequired}
        onChangeText={setAmountRequired}
        keyboardType="numeric"
      />

      <Button title="Save Goal" onPress={saveGoal} />
    </View>
  );
}

export default InputGoalScreen;


