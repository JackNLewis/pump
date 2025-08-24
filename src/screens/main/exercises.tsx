import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExercisesContent from '@/components/exercisesContent';
import Header from '@/components/header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Exercises() {
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title='EXERCISES' />
            <ExercisesContent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default Exercises;