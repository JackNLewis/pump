import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { X, Camera, Share, RotateCw } from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context';
import AddExerciseButton from '@/components/addExerciseButton';
import Exercise from '@/components/exercise';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useRef, useEffect } from 'react';
import Header from '@/components/header';
import { Workout as WorkoutType, User as UserType, Exercise as ExerciseType } from '@/types/types';
import { ImageSourcePropType } from "react-native";
import { useWorkoutContext } from '@/context/workoutContext';
import { useUserContext } from '@/context/userContext';
import { colors } from '@/styles/colors';


function AddWorkout() {
    const navigation = useNavigation<any>();
    const { workout, setWorkout } = useWorkoutContext();
    const { user } = useUserContext();
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        if (!workout && user) {
            setWorkout({
                user: user,
                exercises: [],
            });
        }
        console.log(workout?.workoutImage);
    }, [workout, setWorkout, user]);

    const addExerciseToWorkout = (exercise: ExerciseType) => {
        if (workout) {
            setWorkout({
                ...workout,
                exercises: [...workout.exercises, exercise]
            });
        }
    };

    const submitWorkout = (image: ImageSourcePropType) => {
        if (workout) {
            const updatedWorkout = {
                ...workout,
                workoutImage: image,
            };
            setWorkout(updatedWorkout);
            navigation.navigate('PublishWorkout', { workout: updatedWorkout });
        }
    };


    useLayoutEffect(() => {
        if (workout?.exercises.length && workout.exercises.length > 0 && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [workout?.exercises.length]);

    return (
        <SafeAreaView style={styles.container}>
            <Header title='WORKOUT' leftIcons={
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <X stroke="#000" width={24} height={24} />
                </TouchableOpacity>
            } />
            <View style={styles.contentContainer}>
                <ScrollView
                    ref={scrollViewRef}
                    style={styles.exercisesList}
                    showsVerticalScrollIndicator={false}
                >
                    {workout?.exercises.map((exercise, index) => (
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
                        } />
                </ScrollView>
            </View>

            {
                workout?.workoutImage ?
                 <View style={styles.floatingButtonContainer}>

                        <TouchableOpacity
                            style={styles.floatingButtonSecondary}
                            onPress={() => navigation.navigate('Camera')}
                        >
                            <RotateCw stroke="#FFF" width={20} height={20} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.floatingButtonPrimary}
                            onPress={() => navigation.navigate('PublishWorkout')}
                        >
                            <Share stroke="#FFF" width={24} height={24} />
                        </TouchableOpacity>

                    </View>:
                
                    // Floating Camera Button
                    <TouchableOpacity
                        style={[styles.floatingButtonPrimary, styles.floatingButtonPosition]}
                        onPress={() => navigation.navigate('Camera', {
                            onSubmitWorkout: submitWorkout,
                            workout: workout
                        })}
                    >
                        <Camera stroke="#FFF" width={24} height={24} />
                    </TouchableOpacity>
            }


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
    floatingButtonPosition: {
        position: 'absolute',
        bottom: 50,
        right: 50,
        elevation: 8,
        flexDirection: 'row',
        gap: 10,
    },
    floatingButtonContainer: {
        position: 'absolute',
        bottom: 60,
        right: 50,
        elevation: 8,
        flexDirection: 'row',
        gap: 15,
        alignItems: 'flex-end'
    },
    floatingButtonPrimary: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#00CCA7',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    floatingButtonSecondary: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: colors.grey[500],
        justifyContent: 'center',
        alignItems: 'center',
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
    publishButtonsContainer: {
        flex: 1,
    },
    floatingRetakeButton: {

    },
    floatingPublishButton: {

    }
});

export default AddWorkout;