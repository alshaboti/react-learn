import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setAllGoals(currentGoals => [...currentGoals,
    { key: Math.random().toString(), value: enteredGoal }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalKey => {
    setAllGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);

  }
  return (
    <View style={styles.screen} >
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddHandler}
      />

      <FlatList
        data={allGoals}
        renderItem={itemData =>
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
