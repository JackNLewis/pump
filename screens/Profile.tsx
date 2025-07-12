import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserPlus, AlignRight } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import ProfileStat from '../components/ProfileStat';
import SharedWorkouts from '../components/SharedWorkouts';

const Profile = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>PROFILE</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('People')} style={styles.iconButton}>
              <UserPlus stroke="#666" width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <AlignRight stroke="#666" width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('../assets/workout1.jpg')} 
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.name}>Jack Lewis</Text>
          <Text style={styles.lastActive}>Worked out 1 day ago</Text>
        </View>

        <View style={styles.statsContainer}>
          <ProfileStat label="Workouts" value="360" />
          <ProfileStat label="Followers" value="24" />
          <ProfileStat label="Following" value="32" />
        </View>

        <View style={styles.gymSection}>
          <Text style={styles.gymLabel}>Gym</Text>
          <Text style={styles.gymName}>Pure Gym Bromsgrove</Text>
        </View>

        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Activity</Text>
          <View style={styles.activityPlaceholder}>
            <Text style={styles.placeholderText}>Activity section placeholder</Text>
          </View>
        </View>

        <SharedWorkouts />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImageContainer: {
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  lastActive: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  gymSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  gymLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  gymName: {
    fontSize: 16,
    color: '#666',
  },
  activitySection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  activityPlaceholder: {
    height: 150,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
});

export default Profile;