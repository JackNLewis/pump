import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Set } from '../types/types';


interface ExerciseProps {
  name: string;
  sets: Set[];
}

function Exercise({ name, sets } :ExerciseProps ){
  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{name}</Text>
      
      <View style={styles.headerRow}>
        <Text style={styles.setsHeaderText}>Set</Text>
        <Text style={styles.headerText}>Weight (kg)</Text>
        <Text style={styles.headerText}>Reps</Text>
      </View>
      
      {sets.map((set, index) => (
        <View key={index} style={styles.setRow}>
          <Text style={styles.setNumber}>{set.position}.</Text>
          <Text style={styles.setData}>{set.weight}</Text>
          <Text style={styles.setData}>{set.reps}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '400',
    flex: 1,
    textAlign: 'center',
  },
  setsHeaderText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '400',
    flex: 1,
    textAlign: 'left',
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 2,
    borderRadius: 4,
  },
  setNumber: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
  },
  setData: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
});

export default Exercise;