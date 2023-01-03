import React, { useState } from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WorkoutScroll = ({ navigation }) => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [targetRepCount, setTargetRepCount] = useState(4);
    const workouts = ['Running', 'Cycling', 'Swimming', 'Weightlifting'];
    const repCountValues = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const handleCalculate = () => {
        navigation.navigate('Result', { selectedWorkout, targetRepCount });
    };

    return (
        <ScrollView>
            <Text>Select a workout:</Text>
            <Picker
                selectedValue={selectedWorkout}
                onValueChange={(itemValue) => setSelectedWorkout(itemValue)}
            >
                {workouts.map((workout) => (
                    <Picker.Item key={workout} label={workout} value={workout} />
                ))}
            </Picker>
            <Text>Select the target rep count:</Text>
            <Picker
                selectedValue={targetRepCount}
                onValueChange={(itemValue) => setTargetRepCount(itemValue)}
            >
                {repCountValues.map((value) => (
                    <Picker.Item key={value} label={value.toString()} value={value} />
                ))}
            </Picker>
            <Button
                title="CALCULATE"
                onPress={handleCalculate}
                buttonStyle={styles.calculateButton}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    calculateButton: {
        backgroundColor: 'blue',
        margin: 20,
        padding: 10,
    },
});

export default WorkoutScroll;
