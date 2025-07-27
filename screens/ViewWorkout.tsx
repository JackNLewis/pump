import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { X } from 'react-native-feather';
import { LinearGradient } from 'expo-linear-gradient';
import Exercise from '../components/exercise';
import { Exercise as ExerciseType } from '../types/types';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

const { width } = Dimensions.get('window');

interface ViewWorkoutProps {
    route?: any;
    exercises: ExerciseType[];
    user?: {
        name: string;
        timeAgo: string;
        gym: string;
        profileImage?: any;
    };
    workoutImage?: any;
}

function ViewWorkout({
    route,
    exercises = [], 
    user = {
        name: 'Jack Lewis',
        timeAgo: 'Trained 1 hour ago',
        gym: 'Harveys Gym',
        profileImage: null
    },
    workoutImage = require('../assets/workout2.jpg')
} : ViewWorkoutProps) {
    const navigation = useNavigation();

    const workoutData = {
        user,
        workoutImage,
        exercises,
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={workoutData.workoutImage} style={styles.workoutImage} resizeMode="cover" />
                    <LinearGradient
                        colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
                        style={styles.gradient}
                        locations={[0.5, 1]}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => navigation.goBack()}
                    >
                        <X height={24} width={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.overlay}>
                        <Text style={styles.userName}>{workoutData.user.name}</Text>
                        <Text style={styles.workoutTime}>{workoutData.user.timeAgo}</Text>
                        <Text style={styles.gymName}>{workoutData.user.gym}</Text>
                    </View>
                </View>

                <View style={styles.exercisesContainer}>
                    {workoutData.exercises.map((exercise, index) => (
                        <Exercise
                            key={index}
                            name={exercise.name}
                            sets={exercise.sets}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollView: {
        flex: 1,
    },
    imageContainer: {
        position: 'relative',
        width: width,
        height: width,
    },
    workoutImage: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: spacing.lg,
        right: spacing.lg,
        padding: spacing.sm,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: spacing.lg,
    },
    overlay: {
        position: 'absolute',
        bottom: spacing.lg,
        left: spacing.lg,
        right: spacing.lg,
    },
    userName: {
        fontSize: typography.fontSize.xxl,
        fontWeight: typography.fontWeight.bold,
        color: colors.primary[500],
        marginBottom: spacing.xs,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    workoutTime: {
        fontSize: typography.fontSize.md,
        color: colors.white,
        marginBottom: spacing.xxs,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    gymName: {
        fontSize: typography.fontSize.md,
        color: colors.white,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    exercisesContainer: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
        paddingBottom: spacing.lg,
    },
});

export default ViewWorkout;