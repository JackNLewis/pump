import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = (width - 60) / 3;

interface MonthWorkoutsProps {
  month: string;
  workoutImages: string[];
  onImagePress?: (imageIndex: number) => void;
}

const MonthWorkouts: React.FC<MonthWorkoutsProps> = ({ month, workoutImages, onImagePress }) => {
  const renderWorkoutImages = () => {
    const rows = [];
    for (let i = 0; i < workoutImages.length; i += 3) {
      const rowImages = workoutImages.slice(i, i + 3);
      rows.push(
        <View key={i} style={styles.row}>
          {rowImages.map((image, index) => {
            const imageIndex = i + index;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onImagePress?.(imageIndex)}
              >
                <Image
                  source={{ uri: image }}
                  style={styles.workoutImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.monthHeader}>{month}</Text>
      <View style={styles.imagesContainer}>
        {renderWorkoutImages()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  monthHeader: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8E8E93',
    marginBottom: 15,
    marginLeft: 20,
  },
  imagesContainer: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  workoutImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: 12,
    backgroundColor: '#F2F2F7',
    shadowColor: 'black',
    shadowOffset: {
        height: 0,
        width: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,

  },
});

export default MonthWorkouts;