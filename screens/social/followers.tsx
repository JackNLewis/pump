import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../../components/searchBar';
import UserOverviewCard from '../../components/userOverviewCard';


export default function Followers(){
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
                    <UserOverviewCard
                        key={person.id}
                        name={person.name}
                        secondaryText={person.gym}
                        buttonType={person.isFollowing ? 'following' : 'follow'}
                        onFollowPress={() => { }}
                    />
                ))}
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
});