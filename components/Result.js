import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Result = ({ workout, repCount }) => {
    const restTime = 90 / repCount;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Ionicons name="barbel" size={24} color="#000" />
                <Text style={styles.text}>{workout}</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="" size={24} color="#000" />
                <Text style={styles.text}>{repCount} reps</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="ios-stopwatch" size={24} color="#000" />
                <Text style={styles.text}>
                    {restTime.toFixed(2)} seconds between reps
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
