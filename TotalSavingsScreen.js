import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

const TotalSavingsScreen = ({ route }) => {
  const goals = route.params?.goals || [];
  const totalSavings = goals.reduce((sum, goal) => sum + parseFloat(goal.amountRequired), 0);

  return (
    <ImageBackground source={require('./tinyCactus.jpg')} style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.text}>Total Savings Required: ${totalSavings.toFixed(2)}</Text>
    </View>
    </ImageBackground>
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
    color: 'white'
  },
});

export default TotalSavingsScreen;

