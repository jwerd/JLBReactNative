import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WorkoutNavigator from './components/WorkoutNavigator';
import WorkoutWizard from './components/WorkoutWizard';

const App = () => {
    return (
        <NavigationContainer>
            <WorkoutNavigator />
        </NavigationContainer>
    );
};

export default App;
