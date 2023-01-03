import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TimerScreen = ({ route, navigation }) => {
    const { selectedWorkout } = route.params;
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeElapsed((timeElapsed) => timeElapsed + 1);
            }, 1000);
        } else if (!isRunning && timeElapsed !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeElapsed]);

    return (
        <View style={styles.container}>
            <Text style={styles.workoutText}>{selectedWorkout}</Text>
            <Text style={styles.timeText}>{timeElapsed} seconds</Text>
            <TouchableOpacity onPress={() => setIsRunning((isRunning) => !isRunning)}>
                <Ionicons
                    name={isRunning ? 'ios-pause' : 'ios-play'}
                    size={48}
                    color="black"
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Button
                title="END WORKOUT"
                onPress={() => {
                    navigation.navigate('RepCounter', { timeElapsed });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    workoutText: {
        fontSize: 32,
        margin: 16,
    },
    timeText: {
        fontSize: 24,
        margin: 16,
    },
    icon: {
        margin: 8,
    },
});

export default TimerScreen;
