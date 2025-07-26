import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import ExercisesContent from '../../components/exercisesContent';
import { ArrowLeft } from 'react-native-feather';
import Header from '../../components/header';

const SearchExercise = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const handleExerciseSelect = (exercise: any) => {
        navigation.navigate('AddExercise', {
            exerciseName: exercise.name,
            onAddExercise: route.params?.onAddExercise
        });
    };

    return (
        <View style={styles.container}>
            <Header title="SEARCH" leftIcons={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
            } />

            <ExercisesContent onExercisePress={handleExerciseSelect} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SearchExercise;