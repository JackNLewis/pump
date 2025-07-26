import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ExerciseItem from './exerciseItem';
import FilterButton from './filterButton';
import SearchBar from './searchBar';

const exercisesData = [
  { id: 1, name: 'Barbell Bench Press', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 2, name: 'Incline Dumbbell Bench Press', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 3, name: 'Pec Deck', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 4, name: 'Cable Crossover', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 5, name: 'Incline Barbell Bench Press', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 6, name: 'Dumbbell Bench Press', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 7, name: 'Dumbbell Fly', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 8, name: 'Incline Dumbbell Fly', difficulty: 3, hasInfoPage: true, type: 'custom' },
  { id: 9, name: 'Chest Press Machine', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 10, name: 'Barbell Declined Bench Press', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 11, name: 'Dumbbell Declined Bench Press', difficulty: 1, hasInfoPage: true, type: 'official' },
  { id: 12, name: 'Push Ups', difficulty: 3, hasInfoPage: true, type: 'custom' },
  { id: 13, name: 'Dumbbell Bent-Over Row (Single Arm)', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 14, name: 'Wide-Grip Pulldown', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 15, name: 'Seated Cable Row', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 16, name: 'Close-Grip Pulldown', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 17, name: 'Barbell Row', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 18, name: 'Behind-Neck Pulldown', difficulty: 3, hasInfoPage: true, type: 'official' },
  { id: 19, name: 'Reverse-Grip Pulldown', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 20, name: 'Rope Pulldown', difficulty: 1, hasInfoPage: true, type: 'official' },
  { id: 21, name: 'T-Bar Rows', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 22, name: 'Barbell Bent Over Rows Supinated Grip', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 23, name: 'Pull Up', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 24, name: 'Behind the Neck Pull Up', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 25, name: 'Pull Up with a Supinated Grip', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 26, name: 'Straight Arm Lat Pulldown', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 27, name: 'Dumbbell Bent Over Rows', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 28, name: 'Dumbbell Pullover', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 29, name: 'Barbell Pullover', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 30, name: 'Barbell Deadlift', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 31, name: 'Barbell Sumo Deadlift', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 32, name: 'Trap Bar Deadlift', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 33, name: 'Dumbbell Deadlift', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 34, name: 'Barbell Shrug', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 35, name: 'Dumbbell Shrugs', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 36, name: 'Dumbbell Shoulder Press', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 37, name: 'Dumbbell Lateral Raise', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 38, name: 'Dumbbell Front Raise', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 39, name: 'High Cable Rear Delt Fly', difficulty: 3, hasInfoPage: true, type: 'custom' },
  { id: 40, name: 'Smith Machine Shoulder Press', difficulty: 3, hasInfoPage: true, type: 'official' },
  { id: 41, name: 'Barbell Upright Row', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 42, name: 'Bent-Over Lateral Raise', difficulty: 2, hasInfoPage: false, type: 'custom' },
  { id: 43, name: 'Cable One-Arm Lateral Raise', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 44, name: 'Dumbbell Push Press', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 45, name: 'Barbell Push Press', difficulty: 2, hasInfoPage: false, type: 'custom' },
  { id: 46, name: 'Single-Arm Cable Front Raise', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 47, name: 'Barbell Front Raise', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 48, name: 'Seated Barbell Shoulder Press', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 49, name: 'Seated Behind the Neck Barbell Shoulder Press', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 50, name: 'Standing Barbell Shoulder Press', difficulty: 3, hasInfoPage: false, type: 'official' }
];

interface ExercisesContentProps {
  onExercisePress?: (exercise: any) => void;
}

const ExercisesContent = ({ onExercisePress }: ExercisesContentProps) => {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const getFilteredExercises = () => {
    let filtered = exercisesData;
    
    if (activeFilter === 'Official') {
      filtered = exercisesData.filter(exercise => exercise.type === 'official');
    } else if (activeFilter === 'Custom') {
      filtered = exercisesData.filter(exercise => exercise.type === 'custom');
    }
    
    return filtered.filter(exercise =>
      exercise.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const handleExercisePress = (exercise: any) => {
    if (onExercisePress) {
      onExercisePress(exercise);
    } else {
      console.log('Exercise pressed:', exercise.name);
    }
  };

  const handleInfoPress = (exercise: any) => {
    console.log('Info pressed for:', exercise.name);
  };

  return (
    <View style={styles.content}>
      <View style={{ marginHorizontal: 20, marginTop: 16, marginBottom: 20 }}>
        <SearchBar value={searchText} onChangeText={setSearchText} placeholder="Search for exercise" />
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.filtersContainer}>
          <View style={styles.filtersGroup}>
            <FilterButton
              title="All"
              isActive={activeFilter === 'All'}
              onPress={() => setActiveFilter('All')}
            />
            <FilterButton
              title="Official"
              isActive={activeFilter === 'Official'}
              onPress={() => setActiveFilter('Official')}
            />
            <FilterButton
              title="Custom"
              isActive={activeFilter === 'Custom'}
              onPress={() => setActiveFilter('Custom')}
            />
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {getFilteredExercises().map((exercise) => (
          <ExerciseItem
            key={exercise.id}
            name={exercise.name}
            difficulty={exercise.difficulty}
            hasInfoPage={exercise.hasInfoPage}
            onPress={() => handleExercisePress(exercise)}
            onInfoPress={() => handleInfoPress(exercise)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: '#00CCA7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  filtersGroup: {
    flexDirection: 'row',
  },
  scrollView: {
    flex: 1,
  },
});

export default ExercisesContent;