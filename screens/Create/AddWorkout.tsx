import { StyleSheet, Text, View, Modal, Button, TouchableOpacity, ScrollView } from 'react-native';
import { X } from "react-native-feather";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddExerciseButton from '../../components/AddExerciseButton';
import Exercise from '../../components/Exercise';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useLayoutEffect, useRef } from 'react';
import { Workout, Exercise as ExerciseType } from '../../data/types';


function AddWorkout() {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    
    const [workout, setWorkout] = useState<Workout>({ exercises: [] });
    const scrollViewRef = useRef<ScrollView>(null);
    
    const addExerciseToWorkout = (exercise: ExerciseType) => {
        setWorkout(prevWorkout => ({
            exercises: [...prevWorkout.exercises, exercise]
        }));
    };

    useLayoutEffect(() => {
        if (workout.exercises.length > 0 && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [workout.exercises.length]);
    return (

        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>WORKOUT</Text>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <X stroke="#000" width={24} height={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView 
                    ref={scrollViewRef}
                    style={styles.exercisesList} 
                    showsVerticalScrollIndicator={false}
                >
                    {workout.exercises.map((exercise, index) => (
                        <Exercise
                            key={index}
                            name={exercise.name}
                            sets={exercise.sets.map(set => ({
                                setNumber: set.position + 1,
                                weight: set.weight,
                                reps: set.reps
                            }))}
                        />
                    ))}
                 <AddExerciseButton 
                        onPress={() => navigation.navigate('AddExercise', { 
                            onAddExercise: addExerciseToWorkout 
                        })} 
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    exercisesList: {
        flex: 1,
        marginTop: 20,
    },
});

export default AddWorkout;