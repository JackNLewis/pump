import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './screens/Feed'
import Create from './screens/Create'
import Profile from './screens/Profile';
import { Home as HomeIcon, User as UserIcon} from "react-native-feather";
import CreateWorkoutButton from './components/CreateWorkoutButton';
import React, { useState, useEffect } from 'react';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import supabase from './SupaBase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddSet from './screens/AddSet';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const DummyScreen = () => null;

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [isSignedIn, setSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check current session on app load
        const checkSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setSignedIn(!!session);
            } catch (error) {
                console.error('Error checking session:', error);
                setSignedIn(false);
            } finally {
                setLoading(false);
            }
        };

        checkSession();

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setSignedIn(!!session);
                setLoading(false);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    // Show loading screen while checking authentication
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                { isSignedIn ? (
                    <>
                        <Tab.Navigator
                        initialRouteName="Home"
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ color, focused }) => {
                                switch (route.name){
                                    case 'Home':
                                        return (
                                            <View style={styles.iconContainer}>
                                                <HomeIcon color={color} fill={color} />
                                                {focused && <View style={styles.underline} />}
                                            </View>
                                        )
                                    case 'Feed':
                                        return (
                                            <View style={styles.iconContainer}>
                                                <UserIcon color={color} fill={color} />
                                                {focused && <View style={styles.underline} />}
                                            </View>
                                        )
                                }
                                // You can return any component that you like here!
                                return <CreateWorkoutButton /> 
                            },
                            tabBarActiveTintColor: '#00CCA7',
                            tabBarInactiveTintColor: 'gray',
                            tabBarStyle: {
                                height: 80,
                                paddingTop:10,
                                paddingBottom: 5,
                            },
                            tabBarShowLabel: false,
                        })}
                    >
                    <Tab.Screen
                        name="Home"
                        component={AddSet}
                        options={{ headerShown: false, }}
                    />
                    <Tab.Screen
                        name="Create"
                        component={DummyScreen}
                        listeners={{
                            tabPress: e => {
                            e.preventDefault(); // Prevent default navigation
                            setModalVisible(true); // Show modal instead
                            },
                        }}
                        options={{ tabBarLabel: 'Open Modal' }}
                    />
                    <Tab.Screen
                        name="Feed"
                        component={Profile}
                        options={{ headerShown: false }}
                    />
                    </Tab.Navigator>
                    <Create modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </>
                ) : 
                (
                <>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                         <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Navigator>
                </>
                )}

            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    underline: {
        position: 'absolute',
        bottom: -5,
        width: 20,
        height: 2,
        backgroundColor: '#00CCA7',
        borderRadius: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

