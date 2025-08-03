import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MonthWorkouts from '../../../components/monthWorkouts';
import FilterButton from '../../../components/filterButton';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { stubWorkoutData, stubWorkoutImages } from '../../../types/stub';

function WorkoutHistory() {
    const navigation = useNavigation<any>();
    const [activeFilter, setActiveFilter] = useState('All');


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

                <MonthWorkouts month="June 2022" workoutImages={stubWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={stubWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={stubWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={stubWorkoutImages} onImagePress={handleImagePress} />
                <MonthWorkouts month="June 2022" workoutImages={stubWorkoutImages} onImagePress={handleImagePress} />
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