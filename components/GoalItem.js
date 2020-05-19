import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItmes}>
                <Text> {props.title}</Text>
            </View>
        </TouchableOpacity>
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