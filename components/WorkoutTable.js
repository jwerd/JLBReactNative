import React from 'react';
import { View, Table, Row, Rows } from 'native-base';
import { StyleSheet } from 'react-native';

const WorkoutTable = ({ workouts }) => {
    return (
        <View>
            <Table>
                <Row data={['Exercise', 'Weight', 'Reps', 'Sets']} style={styles.header} textStyle={styles.headerText} />
                <Rows data={workouts} textStyle={styles.rowText} />
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#6b52ae'
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    rowText: {
        fontSize: 18
    }
});

export default WorkoutTable;
