import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  Button, TextInput, FlatList
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [allGoals, setAllGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setAllGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen} >

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal!"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal} />

        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={allGoals}
        renderItem={itemData =>
          <View style={styles.listItmes}>
            <Text> {itemData.item.value}</Text>
          </View>
        } />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: "space-between", alignItems: "center"
  },
  inputText: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  },
  listItmes: {
    marginVertical: 10,
    padding: 2,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
