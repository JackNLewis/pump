import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Info } from 'react-native-feather';

interface ExerciseItemProps {
  name: string;
  difficulty: number;
  hasInfoPage?: boolean;
  onPress?: () => void;
  onInfoPress?: () => void;
}

const ExerciseItem = ({ 
  name, 
  difficulty, 
  hasInfoPage = false, 
  onPress, 
  onInfoPress 
}: ExerciseItemProps) => {
  const renderStars = () => {
    return Array.from({ length: 3 }, (_, index) => (
      <Text 
        key={index} 
        style={[
          styles.star, 
          index < difficulty ? styles.filledStar : styles.emptyStar
        ]}
      >
        ★
      </Text>
    ));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.exerciseContent}>
        <View style={styles.iconContainer}>
          <Image 
            source={require('../assets/workout1.jpg')} 
            style={styles.exerciseIcon}
          />
        </View>
        <View style={styles.exerciseInfo}>
          <Text style={styles.exerciseName}>{name}</Text>
          <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyLabel}>Difficulty</Text>
            <View style={styles.starsContainer}>
              {renderStars()}
            </View>
          </View>
        </View>
      </View>
      {hasInfoPage && (
        <TouchableOpacity 
          style={styles.infoButton}
          onPress={onInfoPress}
        >
          <Info width={20} height={20} color="#666" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  exerciseContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  exerciseIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  difficultyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  difficultyLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  filledStar: {
    color: '#00CCA7',
  },
  emptyStar: {
    color: '#E0E0E0',
  },
  infoButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F8F8F8',
  },
});

export default ExerciseItem;