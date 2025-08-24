import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SetItem {
  setNumber: number;
  weight: string;
}

interface SetSummaryProps {
  date: string;
  maxWeight: string;
  sets: SetItem[];
}

function SetSummary({ date, maxWeight, sets }: SetSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.maxWeight}>{maxWeight}</Text>
      </View>
      
      {sets.map((set) => (
        <View key={set.setNumber} style={styles.setRow}>
          <Text style={styles.setNumber}>{set.setNumber}.</Text>
          <Text style={styles.setWeight}>{set.weight}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  maxWeight: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  setNumber: {
    fontSize: 14,
    color: '#666',
    width: 20,
  },
  setWeight: {
    fontSize: 14,
    color: '#666',
    marginLeft: 20,
  },
});

export default SetSummary;