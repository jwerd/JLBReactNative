import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Result = ({ route }) => {
    const { workout, repCount } = route.params;

    const calculateTimePerRep = 90 / repCount;

    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    const formattedWorkout = workout.split(' ').map(capitalize).join(' ');

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Ionicons name="barbell" size={24} color="#000" />
                <Text style={styles.text}>{formattedWorkout}</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="" size={24} color="#000" />
                <Text style={styles.text}>{repCount} reps</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="ios-stopwatch" size={24} color="#000" />
                <Text style={styles.text}>
                    {calculateTimePerRep.toFixed(2)} seconds between reps
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
    },
});

export default Result;
