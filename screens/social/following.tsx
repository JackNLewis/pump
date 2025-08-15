import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../../components/searchBar';
import UserOverviewCard from '../../components/UserOverviewCard';


export default function Following(){
    const [searchText, setSearchText] = useState('');
    const followingData = [
        { id: 1, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove'},
        { id: 2, name: 'Jack Lewis', gym: 'Pure Gym Bromsgrove'},
    ];

    return (
        <View style={styles.tabContainer}>
            <View style={{ marginHorizontal: 20, marginTop: 16, marginBottom: 20 }}>
                <SearchBar value={searchText} onChangeText={setSearchText} />
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {followingData.map((person) => (
                    <UserOverviewCard
                        key={person.id}
                        name={person.name}
                        secondaryText={person.gym}
                        buttonType={'following'}
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
