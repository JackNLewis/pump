import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberPicker from '../components/NumberPicker';

function AddSet() {
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(85);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chest Press</Text>
      
      <View style={styles.pickersContainer}>
        <NumberPicker
          label="Reps"
          value={reps}
          onChange={setReps}
          currentValue={10}
          increment={1}
        />
        
        <NumberPicker
          label="Weight"
          value={weight}
          onChange={setWeight}
          currentValue={85}
          increment={5}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#4E4E4E',
    marginBottom: 40,
  },
  pickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
});

export default AddSet;