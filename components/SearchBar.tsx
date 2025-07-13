import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Search } from 'react-native-feather';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const SearchBar = ({ value, onChangeText, placeholder = "Search" }: SearchBarProps) => {
    return (
        <View style={styles.searchContainer}>
            <Search height={20} width={20} color="#999" style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
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
});

export default SearchBar;