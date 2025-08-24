import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { X } from 'react-native-feather';
import { LinearGradient } from 'expo-linear-gradient';
import Exercise from '@/components/exercise';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';
import { useWorkoutContext } from '@/context/workoutContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Share } from 'react-native-feather'
import { postWorkout } from '@/api/workouts';

const { width } = Dimensions.get('window');


export function PublishWorkout() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const { workout } = useWorkoutContext();

    const handlePublish = async () => {
        try {
            await postWorkout(workout);
            navigation.navigate('HomeTabs');
        } catch (error) {
            console.error('Failed to publish workout:', error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={workout?.workoutImage} style={styles.workoutImage} resizeMode="cover" />
                    <LinearGradient
                        colors={['transparent', 'rgba(0, 0, 0, 0.9)']}
                        style={styles.gradient}
                        locations={[0.5, 1]}
                    />
                    <TouchableOpacity
                        style={[styles.closeButton, { marginTop: insets.top }]}
                        onPress={() => navigation.goBack()}
                    >
                        <X height={24} width={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    <View style={styles.overlay}>
                        <Text style={styles.userName}>{`${workout?.firstName || 'Unknown'}`}</Text>
                        <Text style={styles.workoutTime}>Created now</Text>
                        {/* <Text style={styles.gymName}>{workout?.user?.gym || 'Unknown gym'}</Text> */}
                    </View>
                </View>

                <View style={styles.exercisesContainer}>
                    {workout?.exercises?.map((exercise, index) => (
                        <Exercise
                            key={index}
                            name={exercise?.name || 'Unknown Exercise'}
                            sets={exercise?.sets || []}
                        />
                    ))}
                </View>
                <View style={{ paddingTop: 140 }}></View>
            </ScrollView>
            <TouchableOpacity
                style={styles.floatingButtonPrimary}
                onPress={handlePublish}
            >
                <Share stroke="#FFF" width={24} height={24} />
            </TouchableOpacity>

        </View>
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
        top: spacing.sm,
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
        position: 'absolute',
        bottom: 50,
        right: 50,
        elevation: 8,
    },
});

export default PublishWorkout;
