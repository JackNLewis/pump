import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ArrowLeft, Search, User as UserIcon } from 'react-native-feather';

const Tab = createMaterialTopTabNavigator();

const ProfileCard = ({ name, gym, onFollowPress, isFollowing }: any) => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileSection}>
        <View style={styles.profilePicture}>
          <UserIcon height={24} width={24} color="#666" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.gymInfo}>{gym}</Text>
        </View>
      </View>
      <FollowButton onPress={onFollowPress} isFollowing={isFollowing} />
    </View>
  );
};

const FollowButton = ({ onPress, isFollowing }: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.followButton,
        isFollowing ? styles.followingButton : styles.followButtonDefault
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.followButtonText,
        isFollowing ? styles.followingButtonText : styles.followButtonTextDefault
      ]}>
        {isFollowing ? 'Following' : 'Follow'}
      </Text>
    </TouchableOpacity>
  );
};

const SearchBar = ({ value, onChangeText }: any) => {
  return (
    <View style={styles.searchContainer}>
      <Search height={20} width={20} color="#999" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const AddTab = () => {
  const [searchText, setSearchText] = useState('');
  const [peopleData, setPeopleData] = useState([
    { id: 1, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: false },
    { id: 2, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: true },
    { id: 3, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: false },
  ]);

  const handleFollowPress = (id: number) => {
    setPeopleData(prevData =>
      prevData.map(person =>
        person.id === id
          ? { ...person, isFollowing: !person.isFollowing }
          : person
      )
    );
  };

  return (
    <View style={styles.tabContainer}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {peopleData.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            gym={person.gym}
            isFollowing={person.isFollowing}
            onFollowPress={() => handleFollowPress(person.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const FollowingTab = () => {
  const [searchText, setSearchText] = useState('');
  const followingData = [
    { id: 1, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: true },
    { id: 2, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: true },
  ];

  return (
    <View style={styles.tabContainer}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {followingData.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            gym={person.gym}
            isFollowing={person.isFollowing}
            onFollowPress={() => {}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const FollowersTab = () => {
  const [searchText, setSearchText] = useState('');
  const followersData = [
    { id: 1, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: false },
    { id: 2, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: true },
  ];

  return (
    <View style={styles.tabContainer}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {followersData.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            gym={person.gym}
            isFollowing={person.isFollowing}
            onFollowPress={() => {}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const PeopleTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00CCA7',
        tabBarInactiveTintColor: '#666',
        tabBarIndicatorStyle: {
          backgroundColor: '#00CCA7',
          height: 2,
        },
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#F0F0F0',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          textTransform: 'none',
        },
      }}
    >
      <Tab.Screen name="Add" component={AddTab} />
      <Tab.Screen name="Following" component={FollowingTab} />
      <Tab.Screen name="Followers" component={FollowersTab} />
    </Tab.Navigator>
  );
};

const People = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft height={24} width={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>PEOPLE</Text>
        <View style={styles.headerSpacer} />
      </View>
      
      <PeopleTabNavigator />
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
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSpacer: {
    width: 32,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  gymInfo: {
    fontSize: 14,
    color: '#666',
  },
  followButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  followButtonDefault: {
    backgroundColor: '#FFFFFF',
    borderColor: '#00CCA7',
  },
  followingButton: {
    backgroundColor: '#00CCA7',
    borderColor: '#00CCA7',
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  followButtonTextDefault: {
    color: '#00CCA7',
  },
  followingButtonText: {
    color: '#FFFFFF',
  },
});

export default People;