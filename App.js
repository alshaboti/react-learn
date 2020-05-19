import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  Button, TextInput, FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setAllGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.screen} >
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        data={allGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  listItmes: {
    marginVertical: 5,
    padding: 2,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }


});
