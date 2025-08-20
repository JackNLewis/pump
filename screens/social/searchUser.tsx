import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'react-native-feather';
import SearchBar from '../../components/searchBar';
import { searchUsersByUsername } from '../../api/users';
import { UserSearchResult } from '../../types/types';
import UserOverviewCard from '../../components/userOverviewCard';
import { UserContext } from '../../context/userContext';
import Header from '../../components/header';

export default function SearchUser({ navigation }: any) {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<UserSearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const userContext = useContext(UserContext);
    const currentUser = userContext?.user;

    const getSearchMessage = (isLoading: boolean, searchTextLength: number, searchResultLength: number) => {
        if (isLoading && searchTextLength > 0) {
            return "Searching...";
        }
        if (!isLoading && searchTextLength > 0 && searchResultLength === 0) {
            return "No users found";
        }
        if (!isLoading && searchTextLength === 0) {
            return "Find other pump users by entering their username.";
        }
        return null;
    };

    const handleSearch = async (text: string) => {
        if (text.length > 0) {
            setLoading(true);
            try {
                const results = await searchUsersByUsername(text, currentUser);
                setSearchResults(results || []);
            } catch (error) {
                console.error('Search error:', error);
                setSearchResults([]);
            }
            setLoading(false);
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleSearch(searchText);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchText]);

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>SEARCH</Text>
            </View> */}

            <Header title='SEARCH'  leftIcons={
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
            }/>

            <View style={styles.content}>
                <View style={{ marginBottom: 20, marginTop:10 }}>
                    <SearchBar value={searchText} onChangeText={setSearchText} />
                </View>

                <ScrollView
                    style={styles.userList}
                    showsVerticalScrollIndicator={false}
                >
                    {getSearchMessage(loading, searchText.length, searchResults.length) && (
                        <Text style={styles.messageText}>
                            {getSearchMessage(loading, searchText.length, searchResults.length)}
                        </Text>
                    )}
                    {!loading && searchResults.length > 0 && (
                        <View>
                            {searchResults.map((res: UserSearchResult, index: number) => (
                                <UserOverviewCard 
                                    key={res.user.id || index}    
                                    targetUser={res}                                 
                                />
                            ))}
                        </View>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        position: 'relative',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'right',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },
    userList: {
        flex: 1,
    },
    messageText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
    },
});