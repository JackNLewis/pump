import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Search as SearchIcon } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import WorkoutCard from '@/components/workoutCard';
import Header from '@/components/header';
import { stubWorkoutData, stubExploreWorkoutData } from '@/types/stub';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Explore = () => {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    
    const workoutData = stubExploreWorkoutData;

    return (
        <View style={[styles.container, {paddingTop: insets.top} ]}>
            <Header title='EXPLORE' rightIcons={
                <TouchableOpacity style={styles.headerIcon}>
                    <SearchIcon height={24} width={24} color="#333" onPress={() => navigation.navigate('SearchUser')}/>
                </TouchableOpacity>
            }/>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {workoutData.map((item) => (
                    <WorkoutCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        workout={item.workout}
                        onPress={() => navigation.navigate('ViewWorkout', { workout: stubWorkoutData })}
                    />
                ))}
            </ScrollView>
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
        paddingVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    headerIcon: {
        padding: 4,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
});

export default Explore;