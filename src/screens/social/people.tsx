import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ArrowLeft } from 'react-native-feather';
import Header from '@/components/header';
import Followers from './followers';
import Following from './following';

const Tab = createMaterialTopTabNavigator();

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
            <Tab.Screen name="Followers" component={Followers} />
            <Tab.Screen name="Following" component={Following} />
        </Tab.Navigator>
    );
};

const People = ({ navigation, route }: any) => {
    const initialTab = route?.params?.initialTab;
    
    return (
        <SafeAreaView style={styles.container}>
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
});

export default People;