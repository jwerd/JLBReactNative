import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Result from './Result';

const WorkoutCalculator = ({ navigation }) => {
    const [workout, setWorkout] = useState('');
    const [repCount, setRepCount] = useState(0);

    const calculateRestTime = () => {
        return 90 / repCount;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Select a workout:</Text>
            <Picker
                selectedValue={workout}
                style={styles.picker}
                onValueChange={(itemValue) => setWorkout(itemValue)}
            >
                <Picker.Item label="Squats" value="squats" />
                <Picker.Item label="Push-ups" value="push-ups" />
                <Picker.Item label="Lunges" value="lunges" />
                <Picker.Item label="Planks" value="planks" />
            </Picker>
            <Text style={styles.text}>Select a target rep count:</Text>
            <Picker
                selectedValue={repCount}
                style={styles.picker}
                onValueChange={(itemValue) => setRepCount(itemValue)}
            >
                <Picker.Item label="4" value={4} />
                <Picker.Item label="6" value={6} />
                <Picker.Item label="8" value={8} />
                <Picker.Item label="10" value={10} />
                <Picker.Item label="12" value={12} />
                <Picker.Item label="14" value={14} />
                <Picker.Item label="16" value={16} />
            </Picker>
            <Button
                title="Calculate"
                onPress={() =>
                    navigation.navigate('Result', {
                        workout,
                        repCount,
                        restTime: calculateRestTime(),
                    })
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        width: 200,
    },
    text: {
        fontSize: 18,
    },
});

export default WorkoutCalculator;
