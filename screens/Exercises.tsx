import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search } from 'react-native-feather';
import ExerciseItem from '../components/ExerciseItem';
import FilterButton from '../components/FilterButton';

const SearchBar = ({ value, onChangeText }: any) => {
  return (
    <View style={styles.searchContainer}>
      <Search height={20} width={20} color="#999" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for exercise"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const exercisesData = [
  { id: 1, name: 'Barbell Curl', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 2, name: 'Preacher Curl', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 3, name: 'EZ Bar Curl', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 4, name: 'EZ Bar Curl', difficulty: 1, hasInfoPage: true, type: 'official' },
  { id: 5, name: 'EZ Bar Curl', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 6, name: 'EZ Bar Curl', difficulty: 2, hasInfoPage: false, type: 'custom' },
  { id: 7, name: 'EZ Bar Curl', difficulty: 1, hasInfoPage: false, type: 'custom' },
];

const ExercisesContent = () => {
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
    console.log('Exercise pressed:', exercise.name);
  };

  const handleInfoPress = (exercise: any) => {
    console.log('Info pressed for:', exercise.name);
  };

  return (
    <View style={styles.content}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      
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

const Exercises = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EXERCISES</Text>
      </View>
      
      <ExercisesContent />
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
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
});

export default Exercises;