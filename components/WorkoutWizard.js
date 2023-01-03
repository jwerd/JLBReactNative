import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WorkoutWizard = ({ navigation }) => {
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    const workouts = ['Running', 'Cycling', 'Swimming', 'Weightlifting'];

    const handleNext = () => {
        if (selectedWorkout && targetTime) {
            navigation.navigate('Timer', { selectedWorkout, targetTime });
        }
    };

    return (
        <View>
            <Text>Select a workout:</Text>
            <Picker
                selectedValue={selectedWorkout}
                onValueChange={(itemValue) => setSelectedWorkout(itemValue)}
            >
                {workouts.map((workout) => (
                    <Picker.Item key={workout} label={workout} value={workout} />
                ))}
            </Picker>
            <Text>Set a target time (in seconds):</Text>
            <Picker
                selectedValue={targetTime}
                onValueChange={(itemValue) => setTargetTime(itemValue)}
            >
                <Picker.Item label="60" value={60} />
                <Picker.Item label="90" value={90} />
                <Picker.Item label="120" value={120} />

            </Picker>
            <Button title="NEXT" onPress={handleNext} />
        </View>
    );
};

export default WorkoutWizard;
