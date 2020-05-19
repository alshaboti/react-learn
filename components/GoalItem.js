import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItmes}>
            <Text> {props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItmes: {
        marginVertical: 5,
        padding: 2,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
}
);

export default GoalItem;