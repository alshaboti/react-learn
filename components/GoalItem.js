import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItmes}>
                <View >
                    <Text> {props.title}</Text>
                </View>
                <View style={styles.imgView}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItmes: {
        marginVertical: 5,
        padding: 2,
        // backgroundColor: '#ccc',
        // borderColor: 'black',
        // borderWidth: 1
        backgroundColor: '#eee',
        borderColor: 'gray',
        // borderWidth: 1

    },
    tinyLogo: {
        width: 50,
        height: 50,

    },
    imgView: {
        flexDirection: "row",
        justifyContent: "center",
    }
}
);

export default GoalItem;