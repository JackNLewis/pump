import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ArrowLeft, User as UserIcon } from 'react-native-feather';
import SearchBar from '../../components/searchBar';
import Header from '../../components/header';

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


const FollowingTab = () => {
    const [searchText, setSearchText] = useState('');
    const followingData = [
        { id: 1, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: true },
        { id: 2, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove', isFollowing: true },
    ];

    return (
        <View style={styles.tabContainer}>
            <View style={{ marginHorizontal: 20, marginTop: 16, marginBottom: 20 }}>
                <SearchBar value={searchText} onChangeText={setSearchText} />
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {followingData.map((person) => (
                    <ProfileCard
                        key={person.id}
                        name={person.name}
                        gym={person.gym}
                        isFollowing={person.isFollowing}
                        onFollowPress={() => { }}
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
            <View style={{ marginHorizontal: 20, marginTop: 16, marginBottom: 20 }}>
                <SearchBar value={searchText} onChangeText={setSearchText} />
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {followersData.map((person) => (
                    <ProfileCard
                        key={person.id}
                        name={person.name}
                        gym={person.gym}
                        isFollowing={person.isFollowing}
                        onFollowPress={() => { }}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const PeopleTabNavigator = ({ initialTab }: { initialTab?: string }) => {
    return (
        <Tab.Navigator
            initialRouteName={initialTab || 'Following'}
            screenOptions={{
                tabBarStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: '500',
                },
                tabBarActiveTintColor: '#00CCA7',
                tabBarInactiveTintColor: '#333',
                tabBarIndicatorStyle: {
                    backgroundColor: '#00CCA7',
                    height: 1,
                },
                tabBarContentContainerStyle: {
                    paddingHorizontal: 10,
                }

            }}
        >
            <Tab.Screen name="Following" component={FollowingTab} />
            <Tab.Screen name="Followers" component={FollowersTab} />
        </Tab.Navigator>
    );
};

const People = ({ navigation, route }: any) => {
    const initialTab = route?.params?.initialTab;
    
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>PEOPLE</Text>
            </View> */}

            <Header title='PEOPLE' leftIcons={
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
            }/>

            <PeopleTabNavigator initialTab={initialTab} />
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
    backButton: {
        padding: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        paddingRight:10,
    },
    tabContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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