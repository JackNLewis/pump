import { StyleSheet, Text, View, Modal, Button, TouchableOpacity, ScrollView } from 'react-native';
import { X, Camera, ArrowLeft } from "react-native-feather";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AddExerciseButton from '@/components/addExerciseButton';
import Exercise from '@/components/exercise';
import { useNavigation } from '@react-navigation/native';
import { useState, useLayoutEffect, useRef } from 'react';
import Header from '@/components/header';
import { Workout as WorkoutType, User as UserType, Exercise as ExerciseType } from '@/types/types';
import { ImageSourcePropType } from "react-native";


function AddWorkout() {
    const navigation = useNavigation<any>();

    const [workout, setWorkout] = useState<WorkoutType>({ 
        user : {
            firstName: "",
            lastName: "",
            username: "",
            imageURI: "",
            lastOnline: "",
            gym: "",
        },
        exercises: [],
     });
    const scrollViewRef = useRef<ScrollView>(null);

    const addExerciseToWorkout = (exercise: ExerciseType) => {
        setWorkout(prevWorkout => ({
            ...prevWorkout,
            exercises: [...prevWorkout.exercises, exercise]
        }));
    };

    const submitWorkout = (image: ImageSourcePropType) => {
        setWorkout(prevWorkout => ({
            ...prevWorkout,
            workoutImage: image,
        }));

        navigation.navigate('ViewWorkout', { workout: { ...workout, workoutImage: image } });
    };

    
    useLayoutEffect(() => {
        if (workout.exercises.length > 0 && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [workout.exercises.length]);

    return (
        <SafeAreaView style={styles.container}>
            <Header title='WORKOUT' leftIcons={
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <X stroke="#000" width={24} height={24} />
                </TouchableOpacity>
            }/>
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
                            sets={exercise.sets}
                        />
                    ))}
                    <AddExerciseButton
                        title='ADD EXERCISE'
                        onPress={() => navigation.navigate('SearchExercise', {
                            onAddExercise: addExerciseToWorkout
                        })
                    }/>
                </ScrollView>
            </View>
            
            {/* Floating Camera Button */}
            <TouchableOpacity 
                style={styles.floatingCameraButton}
                onPress={() => navigation.navigate('Camera', { 
                    onSubmitWorkout: submitWorkout,
                    workout: workout 
                })}
            >
                <Camera stroke="#FFF" width={24} height={24} />
            </TouchableOpacity>
        </SafeAreaView>
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
    floatingCameraButton: {
        position: 'absolute',
        bottom: 50,
        right: 50,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#00CCA7',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
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