import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Enter your goal!"
                style={styles.inputText}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            {/* to pass enteredGoal value to the addGoalHandler in App */}
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: "space-between", alignItems: "center"
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    },
});
export default GoalInput;