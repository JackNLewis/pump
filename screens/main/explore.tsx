import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search as SearchIcon } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import WorkoutCard from '../../components/WorkoutCard';
import Header from '../../components/Header';

const Explore = () => {
    const navigation = useNavigation<any>();

    const workoutData = [
        {
            id: 1,
            name: "Jack Lewis",
            workout: "Trained Chest",
            image: require('../../assets/workout1.jpg')
        },
        {
            id: 2,
            name: "Jack Lewis",
            workout: "Trained Chest",
            image: require('../../assets/workout1.jpg')
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
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
                        onPress={() => navigation.navigate('ViewWorkout', { workoutId: item.id })}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
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