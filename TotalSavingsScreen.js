import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import { useEffect } from 'react';



const TotalSavingsScreen = ({ route, navigation }) => {
  const goals = route.params?.goals || [];
  const totalSavings = goals.reduce((sum, goal) => sum + parseFloat(goal.amountRequired), 0);

  useEffect(() => {
    navigation.setOptions({
      title: 'Total Savings',
    });
  }, [navigation]);

  return (
    <ImageBackground source={require('./piggyBank.jpg')} style={{ flex: 1 }}>
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
    color: 'white',
    position: 'absolute',
    top: 217,  // This value will determine how far down the text is from the top
  },
});



export default TotalSavingsScreen;

