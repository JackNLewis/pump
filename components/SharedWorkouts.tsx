import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'react-native-feather';

const SharedWorkouts = () => {
  const workoutData = [
    { id: 1, image: require('../assets/workout1.jpg') },
    { id: 2, image: require('../assets/workout1.jpg') },
    { id: 3, image: require('../assets/workout1.jpg') },
    { id: 4, image: require('../assets/workout1.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Shared Workouts</Text>
        <TouchableOpacity style={styles.chevronButton}>
          <ChevronRight stroke="#666" width={20} height={20} />
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {workoutData.map((workout) => (
          <TouchableOpacity key={workout.id} style={styles.workoutItem}>
            <Image source={workout.image} style={styles.workoutImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
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
  },
});

export default SharedWorkouts;