import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutCalculator from './WorkoutCalculator';
import Result from './Result';

const Stack = createStackNavigator();

const WorkoutNavigator = () => (
    <Stack.Navigator initialRouteName="WorkoutCalculator">
        <Stack.Screen name="WorkoutCalculator" component={WorkoutCalculator} />
        <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
);

export default WorkoutNavigator;
