import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ProfileStatProps {
  label: string;
  value: string | number;
  onPress?: () => void;
}

const ProfileStat: React.FC<ProfileStatProps> = ({ label, value, onPress }) => {
  const Wrapper = onPress ? TouchableOpacity : View;
  
  return (
    <Wrapper style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '400',
    color: '#666',
  },
});

export default ProfileStat;