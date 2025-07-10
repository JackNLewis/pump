import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User as UserIcon, MoreHorizontal } from 'react-native-feather';

const CardHeader = ({ name, workout, profileImage } : any) => {
  return (
    <View style={styles.cardHeader}>
      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <UserIcon size={20} color="#666" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.workoutInfo}>{workout}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.settingsIcon}>
        <MoreHorizontal size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const WorkoutCard = ({ image, name, workout } : any) => {
  return (
    <View style={styles.card}>
      <CardHeader name={name} workout={workout} />
      <Image source={image} style={styles.cardImage} resizeMode="cover" />
    </View>
  );
};

const Explore = () => {
  const workoutData = [
    {
      id: 1,
      name: "Jack Lewis",
      workout: "Trained Chest",
      image: require('../assets/workout1.jpg')
    },
    {
      id: 2,
      name: "Jack Lewis", 
      workout: "Trained Chest",
      image: require('../assets/workout1.jpg')
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EXPLORE</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <UserIcon size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {workoutData.map((item) => (
          <WorkoutCard
            key={item.id}
            image={item.image}
            name={item.name}
            workout={item.workout}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerIcon: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00CCA7',
    marginBottom: 2,
  },
  workoutInfo: {
    fontSize: 14,
    color: '#666',
  },
  settingsIcon: {
    padding: 4,
  },
  cardImage: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default Explore;