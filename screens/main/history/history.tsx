import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MonthWorkouts from '../../../components/monthWorkouts';
import FilterButton from '../../../components/filterButton';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { stubWorkoutData } from '../../../types/stub';

function WorkoutHistory() {
    const navigation = useNavigation<any>();
    const [activeFilter, setActiveFilter] = useState('All');

    const sampleWorkoutImages = [
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    ];

    const handleImagePress = (imageIndex: number) => {
        navigation.navigate('ViewWorkout', { workout: stubWorkoutData });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                // Native ScrollView doesn't interfere with tab swipes
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
                <View style={styles.filtersContainer}>
                    <FilterButton
                        title="All"
                        isActive={activeFilter === 'All'}
                        onPress={() => setActiveFilter('All')}
                    />
                    <FilterButton
                        title="Public"
                        isActive={activeFilter === 'Public'}
                        onPress={() => setActiveFilter('Public')}
                    />
                    <FilterButton
                        title="Private"
                        isActive={activeFilter === 'Private'}
                        onPress={() => setActiveFilter('Private')}
                    />
                </View>

                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} onImagePress={handleImagePress} />
            </ScrollView>
        </SafeAreaView>
    );
}

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
        paddingTop: 20,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#00CCA7',
    },
    progressTab: {
        fontSize: 24,
        fontWeight: '600',
        color: '#8E8E93',
    },
    scrollView: {
        flex: 1,
    },
    filtersContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
});

export default WorkoutHistory