import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ExerciseItem from './exerciseItem';
import FilterButton from './filterButton';
import SearchBar from './searchBar';
import { stubExercisesData } from '@/types/stub';


interface ExercisesContentProps {
  onExercisePress?: (exercise: any) => void;
}

const ExercisesContent = ({ onExercisePress }: ExercisesContentProps) => {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const getFilteredExercises = () => {
    let filtered = stubExercisesData;
    
    if (activeFilter === 'Official') {
      filtered = stubExercisesData.filter(exercise => exercise.type === 'official');
    } else if (activeFilter === 'Custom') {
      filtered = stubExercisesData.filter(exercise => exercise.type === 'custom');
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