import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CardHeader from './CardHeader';
import { spacing } from '../styles/spacing';
import { colors } from '../styles/colors';

interface WorkoutCardProps {
  image: any;
  name: string;
  workout: string;
  onPress?: () => void;
  onMorePress?: () => void;
}

function WorkoutCard({ image, name, workout, onPress, onMorePress }: WorkoutCardProps) {
  return (
    <View style={styles.card}>
      <CardHeader name={name} workout={workout} onMorePress={onMorePress} />
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.cardImage} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: spacing.lg,
  },
  cardImage: {
    width: '100%',
    height: 350,
    borderRadius: spacing.md,
  },
});

export default WorkoutCard;