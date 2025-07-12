import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MonthWorkouts from '../../components/MonthWorkouts';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function WorkoutHistory() {

    const sampleWorkoutImages = [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    ];

    const scrollViewRef = useRef(null);



    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
                // Native ScrollView doesn't interfere with tab swipes
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >

                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} />
                <MonthWorkouts month="June 2022" workoutImages={sampleWorkoutImages} />
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
});

export default WorkoutHistory