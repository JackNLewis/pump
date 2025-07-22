import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User as UserIcon, ArrowLeft } from 'react-native-feather';
import SearchBar from '../components/SearchBar';
import { getProfiles } from '../api/profiles';


const UserCard = ({ name, username }: any) => {
    return (
        <TouchableOpacity style={styles.userCard}>
            <View style={styles.profileSection}>
                <View style={styles.profilePicture}>
                    <UserIcon height={24} width={24} color="#666" />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{name}</Text>
                    <Text style={styles.username}>@{username}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function SearchUser({ navigation }: any) {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

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
                const results = await getProfiles(text);
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
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft height={24} width={24} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>FOLLOW</Text>
            </View>

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
                            {searchResults.map((user: any, index: number) => (
                                <UserCard 
                                    key={index} 
                                    name={user.full_name || user.user_name} 
                                    username={user.user_name} 
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
    // backButton: {
    //     position: 'absolute',
    //     left: 20,
    //     zIndex: 1,
    // },
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
    userCard: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    username: {
        fontSize: 14,
        color: '#666',
    },
    messageText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
    },
});