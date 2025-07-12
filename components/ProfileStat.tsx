import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileStatProps {
  label: string;
  value: string | number;
}

const ProfileStat: React.FC<ProfileStatProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
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