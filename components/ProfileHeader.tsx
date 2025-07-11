import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  UserPlus } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => navigation.navigate('People')}>
          <UserPlus stroke="#666" width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Jack Lewis</Text>
          <Text style={styles.lastActive}>Worked out 1 day ago</Text>
        </View>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitial}>J</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userInfo: {
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
    textAlign: 'right',
  },
  lastActive: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitial: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
  },
});

export default ProfileHeader;