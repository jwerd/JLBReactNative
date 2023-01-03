import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RepCounterScreen = ({ route, navigation }) => {
    const { timeElapsed } = route.params;
    const [repCount, setRepCount] = useState('');

    return (
        <View>
            <Text style={styles.timeText}>{timeElapsed} seconds</Text>
            <Text style={styles.label}>Rep count:</Text>
            <TextInput
                style={styles.input}
                keyboardType="number-pad"
                onChangeText={(text) => setRepCount(text)}
                value={repCount}
            />
            <Button
                title="FINISH"
                onPress={() => {
                    // Submit the rep count and navigate back to the WorkoutScreen component
                    // You can also pass the rep count as a prop to the WorkoutScreen component here
                    navigation.navigate('Workout');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    timeText: {
        fontSize: 24,
        margin: 16,
    },
    label: {
        fontSize: 16,
        margin: 8,
    },
    input: {
        fontSize: 16,
        margin: 8,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
    },
});

export default RepCounterScreen;
