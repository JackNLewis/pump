import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'react-native-feather';
import { Workout } from '@/types/types';

const SharedWorkouts = () => {
//   const workoutData = [
//     { id: 1, image: require('../assets/workout1.jpg') },
//     { id: 2, image: require('../assets/workout1.jpg') },
//     { id: 3, image: require('../assets/workout1.jpg') },
//     { id: 4, image: require('../assets/workout1.jpg') },
//   ];
  const workoutData : Workout[] = [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shared Workouts</Text>
        <TouchableOpacity style={styles.chevronButton}>
          <ChevronRight stroke="#666" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {
        workoutData.length > 0 ?
        workoutData.map((workout) => (
          <TouchableOpacity key={workout.id} style={styles.workoutItem}>
            <Image source={workout.image} style={styles.workoutImage} />
          </TouchableOpacity>
        )) : 
        <View style={styles.noWorkoutsContainer}>
            <Text style={styles.noWorkoutsText}>No workouts available</Text>
            
        </View>
        
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  chevronButton: {
    padding: 4,
  },
  scrollView: {
    paddingLeft: 20,
  },
  scrollContent: {
    paddingRight: 20,
  },
  workoutItem: {
    marginRight: 12,
  },
  workoutImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noWorkoutsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noWorkoutsText: {
    flex: 1,
    textAlign: 'center',
    color: '#666',
  },
});

export default SharedWorkouts;