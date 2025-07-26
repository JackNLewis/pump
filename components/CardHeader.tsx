import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User as UserIcon, MoreHorizontal } from 'react-native-feather';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

interface CardHeaderProps {
  name: string;
  workout: string;
  profileImage?: any;
  onMorePress?: () => void;
}

function CardHeader({ name, workout, profileImage, onMorePress }: CardHeaderProps) {
  return (
    <View style={styles.cardHeader}>
      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <UserIcon height={20} width={20} color={colors.grey[600]} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.workoutInfo}>{workout}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.settingsIcon} onPress={onMorePress}>
        <MoreHorizontal height={20} width={20} color={colors.grey[600]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.grey[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary[500],
    marginBottom: 2,
  },
  workoutInfo: {
    fontSize: typography.fontSize.sm,
    color: colors.grey[600],
  },
  settingsIcon: {
    padding: spacing.xs,
  },
});

export default CardHeader;