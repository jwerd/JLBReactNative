import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import Exercise from './Exercise';

const Workout = ({ exercises }) => {
    return (
        <View style={styles.container}>
            {exercises.map(exercise => (
                <Exercise
                    key={exercise.name}
                    name={exercise.name}
                    weight={exercise.weight}
                    repCount={exercise.repCount}
                    setNumber={exercise.setNumber}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});


export default Workout;
