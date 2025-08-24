import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '@/components/searchBar';
import UserOverviewCard from '@/components/userOverviewCard';
import { UserContext } from '@/context/userContext';
import { getFollowers } from '@/api/users';
import { Follow } from '@/types/types';


export default function Followers(){
    const [searchText, setSearchText] = useState('');
    const [followersData, setFollowersData] = useState<Follow[]>([]);
    const userContext = useContext(UserContext);

    useEffect(() => {
        const fetchFollowers = async () => {
            if (userContext?.user?.id) {
                try {
                    const followers = await getFollowers(userContext.user.id);
                    console.log(followers)
                    setFollowersData(followers);
                } catch (error) {
                    console.error('Error fetching followers:', error);
                } 
            }
        };

        fetchFollowers();
    }, [userContext?.user?.id]);
    
    return (
        <View style={styles.tabContainer}>
            <View style={{ marginHorizontal: 20, marginTop: 16, marginBottom: 20 }}>
                <SearchBar value={searchText} onChangeText={setSearchText} />
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {followersData.map((follow, index) => (
                    <UserOverviewCard
                        key={index}
                        follow={follow}
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