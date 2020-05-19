import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your goal!"
                    style={styles.inputText}
                    onChangeText={goalInputHandler}
                // value={enteredGoal}
                />
                <View style={styles.addCancel}>
                    {/* to pass enteredGoal value to the addGoalHandler in App */}
                    <View style={styles.buttonView}>
                        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>

                </View>

            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        // take all available space
        flex: 1
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10
    },
    addCancel: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '60%'
    },
    buttonView: {
        width: '40%'
    }

});
export default GoalInput;