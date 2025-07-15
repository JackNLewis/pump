import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { X } from 'react-native-feather';
import { LinearGradient } from 'expo-linear-gradient';
import Exercise from '../components/Exercise';

const { width } = Dimensions.get('window');

interface ViewWorkoutProps {
  route: any;
}

const ViewWorkout: React.FC<ViewWorkoutProps> = ({ route }) => {
  const navigation = useNavigation();
  
  // Sample data - replace with actual data from route params
  const workoutData = {
    user: {
      name: 'Jack Lewis',
      timeAgo: 'Trained 1 hour ago',
      gym: 'Harveys Gym',
      profileImage: null, // placeholder for profile image
    },
    workoutImage: require('../assets/workout2.jpg'), // Sample workout image
    exercises: [
      {
        name: 'Bench Press',
        sets: [
          { setNumber: 1, weight: 80, reps: 12 },
          { setNumber: 2, weight: 80, reps: 8 },
          { setNumber: 3, weight: 80, reps: 6 },
        ],
      },
      {
        name: 'Cable Flys',
        sets: [
          { setNumber: 1, weight: 20, reps: 12 },
          { setNumber: 2, weight: 20, reps: 12 },
          { setNumber: 3, weight: 20, reps: 12 },
        ],
      },
      {
        name: 'Lat Raises',
        sets: [
          { setNumber: 1, weight: 20, reps: 12 },
        ],
      },
    ],
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
    backgroundColor: '#FFFFFF',
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
    top: 20,
    right: 20,
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BFA5',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  workoutTime: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  gymName: {
    fontSize: 16,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  exercisesContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default ViewWorkout;