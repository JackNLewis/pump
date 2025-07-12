import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { ChevronDown, Users } from 'react-native-feather';
import FilterButton from '../../components/FilterButton';
import ProgressChart from '../../components/ProgressChart';
import SetSummary from '../../components/SetSummary';

const chartData = [
  { value: 100, label: 'Jan' },
  { value: 85, label: 'Feb' },
  { value: 70, label: 'Mar' },
  { value: 110, label: 'Apr' },
  { value: 100, label: 'May' },
  { value: 75, label: 'Jun' },
  { value: 30, label: 'Jul' },
];

const workoutHistory = [
  {
    date: '22.07.2023',
    maxWeight: '90kg',
    sets: [
      { setNumber: 1, weight: '90kg' },
      { setNumber: 2, weight: '90kg' },
      { setNumber: 3, weight: '90kg' },
    ],
  },
  {
    date: '21.07.2023',
    maxWeight: '90kg',
    sets: [],
  },
  {
    date: '20.07.2023',
    maxWeight: '85kg',
    sets: [],
  },
];

function Stats() {
  const [activeFilter, setActiveFilter] = useState('Max');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <View style={styles.filtersContainer}>
          <FilterButton
            title="Max"
            isActive={activeFilter === 'Max'}
            onPress={() => setActiveFilter('Max')}
          />
          <FilterButton
            title="Avg"
            isActive={activeFilter === 'Avg'}
            onPress={() => setActiveFilter('Avg')}
          />
          <FilterButton
            title="Reps"
            isActive={activeFilter === 'Reps'}
            onPress={() => setActiveFilter('Reps')}
          />
        </View>
        
        <View style={styles.exerciseHeader}>
          <View style={styles.exerciseTitle}>
            <Text style={styles.exerciseName}>Bench Press</Text>
            <ChevronDown color="#666" height={16} width={16}/>
          </View>
          <Text style={styles.currentWeight}>110kg</Text>
        </View>
        
        <ProgressChart data={chartData} />
        
        <Text style={styles.monthLabel}>6 Month</Text>
        
        <View style={styles.historyContainer}>
          {workoutHistory.map((workout, index) => (
            <SetSummary
              key={index}
              date={workout.date}
              maxWeight={workout.maxWeight}
              sets={workout.sets}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  exerciseTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginRight: 8,
  },
  currentWeight: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
  },
  monthLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  historyContainer: {
    marginBottom: 20,
  },
});

export default Stats;