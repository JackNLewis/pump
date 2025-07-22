import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import ExercisesContent from '../components/ExercisesContent';
import { ArrowLeft } from 'react-native-feather';

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
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>FOLLOW</Text>
            </View>

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