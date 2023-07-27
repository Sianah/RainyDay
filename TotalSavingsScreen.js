import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalSavingsScreen = ({ route }) => {
    const { goals } = route.params || [];


  // Calculate total savings
  const totalSavings = goals.reduce((sum, goal) => sum + parseFloat(goal.amountRequired), 0);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Total Savings Required: ${totalSavings.toFixed(2)}</Text>
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TotalSavingsScreen;
