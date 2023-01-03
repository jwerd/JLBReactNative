import React from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const Exercise = ({ name, weight, repCount, setNumber }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.details}>
                {weight} lbs x {repCount} reps x {setNumber} sets
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10
    },
    details: {
        fontSize: 16,
        color: 'gray'
    }
});

export default Exercise;
