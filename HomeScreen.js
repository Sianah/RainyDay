import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useGoals } from './GoalsContext'; 
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';




const HomeScreen = ({ navigation }) => {
  const { goals, setGoals } = useGoals();
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@goals', jsonValue)
    } catch (e) {
      // saving error
      console.error("Error saving data:", e);
    }
}
const loadData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@goals')
    if (jsonValue != null) {
      setGoals(JSON.parse(jsonValue));
    }
  } catch (e) {
    // loading error
    console.error("Error loading data:", e);
  }
}

useEffect(() => {
  loadData();
}, []);

useEffect(() => {
  navigation.setOptions({
    title: 'Home',
    headerLeft: () => (
      <Button
        title="Total Savings"
        onPress={() => navigation.navigate('TotalSavings', { goals })}
      />
    ),
  });
}, [navigation, goals]);

useEffect(() => {
  storeData(goals);
}, [goals]);

const handleDeleteGoal = (index) => {
  const updatedGoals = [...goals];
  updatedGoals.splice(index, 1);
  setGoals(updatedGoals);
  storeData(updatedGoals);  // Saving the updated list to AsyncStorage
};

return (
  <ImageBackground source={require('./tinyCactus.jpg')} style={{ flex: 1 }}>
  <View style={{ flex: 1, padding: 20 }}>
    <FlatList 
      data={goals}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.goalBox}>
          <View style={styles.headerRow}>
            <Button 
              title="Edit" 
              onPress={() => {
                navigation.navigate('InputGoal', { existingGoal: item, goalIndex: index });
              }} 
            />
            <Text style={styles.goalNameText}>{item.goalName}</Text>
            <Button 
              title="Delete" 
              onPress={() => handleDeleteGoal(index)} 
            />
          </View>
      
          <Text>
    <Text style={styles.boldLabel}>Amount Required:</Text> ${item.amountRequired}
  </Text>
  <Text>
    <Text style={styles.boldLabel}>Completion Date:</Text> {item.estimatedCompletion}
  </Text>
        </View>
      )}
     />
     <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('InputGoal')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
  </View>
  </ImageBackground>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures items are spaced evenly
    alignItems: 'center', // Vertically aligns items in the center
    marginBottom: 10, // Optional: Adds some space between this row and the next items
  },
  goalNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1, // This makes the goal name text take the available space
    textAlign: 'center',
  },
  editButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',  // Align to the bottom
    alignItems: 'flex-start',    // Align to the left
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  editButton: {
    marginRight: 'auto'  // Push the button to the left side
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures buttons are on opposite ends
    marginBottom: 10, // Optional: Adds some space between the buttons and the next item
  },

  addButton: {
    backgroundColor: '#f9f9f9',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10, // Optional, to give some space from the last goal box
},
  
addButtonContainer: {
  justifyContent: 'center',
  alignItems: 'flex-end', // Align the button to the right
  paddingRight: 1,       // Give it some padding from the right side
},
  addButtonText: {
    color: '#2196F3',  // White text color
    fontSize: 30,    // Adjust as needed
    fontWeight: 'bold'
  },
  boldLabel: {
    fontWeight: 'bold',
  },
  
  
});




export default HomeScreen;



