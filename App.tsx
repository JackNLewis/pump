import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Home as HomeIcon, User as UserIcon } from "react-native-feather";
import CreateWorkoutButton from './components/CreateWorkoutButton';
import React, { useState, useEffect } from 'react';
import supabase from './SupaBase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import People from './screens/social/People';
import HomeTabs from './screens/home/HomeTabs';
import ViewWorkout from './screens/ViewWorkout';
import AddWorkout from './screens/create/AddWorkout';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import SearchUser from './screens/social/SearchUser';
import SearchExercise from './screens/create/SearchExercise';
import AddExercise from './screens/create/AddExercise';
import Camera from './screens/create/Camera';

const Stack = createStackNavigator();

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [isSignedIn, setSignedIn] = useState(true);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     // Check current session on app load
    //     const checkSession = async () => {
    //         try {
    //             const { data: { session } } = await supabase.auth.getSession();
    //             setSignedIn(!!session);
    //         } catch (error) {
    //             console.error('Error checking session:', error);
    //             setSignedIn(false);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     checkSession();

    //     // Listen for auth state changes
    //     const { data: { subscription } } = supabase.auth.onAuthStateChange(
    //         (event, session) => {
    //             setSignedIn(!!session);
    //             setLoading(false);
    //         }
    //     );

    //     return () => subscription.unsubscribe();
    // }, []);

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
                <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                { isSignedIn ? (
                    // Authenticated Pages
                    <Stack.Group>
                        {/* Home Screens */}
                        <Stack.Screen name="HomeTabs" component={HomeTabs} />

                        {/* Social Screens */}
                        <Stack.Screen name="People" component={People} />
                        <Stack.Screen name="SearchUser" component={SearchUser} />
                        
                        {/* Create Screens */}
                        <Stack.Screen name="Create" component={AddWorkout}/>
                        <Stack.Screen name="SearchExercise" component={SearchExercise} />
                        <Stack.Screen name="AddExercise" component={AddExercise} />
                        <Stack.Screen name="Camera" component={Camera} />

                        {/* Common Screens */}
                        <Stack.Screen name="ViewWorkout" component={ViewWorkout} />
                    </Stack.Group>
                ): 
                (
                     // Non-Authenticated Pages
                    <Stack.Group>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Group>
                )}
                
                </Stack.Navigator>

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

