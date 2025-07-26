import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExercisesContent from '../../components/ExercisesContent';
import Header from '../../components/Header';

function Exercises(){
  return (
    <SafeAreaView style={styles.container}>
      <Header title='EXERCISES'/>
      <ExercisesContent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default Exercises;