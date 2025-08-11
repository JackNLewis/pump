import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './FireBase';
import { getUserById } from './api/users';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import People from './screens/social/people';
import SearchUser from './screens/social/searchUser';
import SearchExercise from './screens/create/searchExercise';
import MainNav from './screens/main/mainNav';
import AddExercise from './screens/create/addExercise';
import Camera from './screens/create/camera';
import Login from './screens/auth/login';
import SignUp from './screens/auth/signUp';
import RegisterProfile from './screens/auth/registerProfile';
import AddWorkout from './screens/create/addWorkout';
import ViewWorkout from './screens/viewWorkout';
import RegisterImage from './screens/auth/registerImage';
import { User } from './types/types';
const Stack = createStackNavigator();

export default function App() {
    const [isSignedIn, setSignedIn] = useState(false);
    const [profile, setProfile] = useState<User|null>(null);
    const [loading, setLoading] = useState(true);
    
    const loadProfile = async (userId: string) => {
        try {
            const userProfile = await getUserById(userId);
            setProfile(userProfile);
        } catch (error) {
            console.error('Error checking user registration:', error);
            setProfile(null);
        }
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setSignedIn(!!user);
            
            if (user) {
                await loadProfile(user.uid);
            }
            
            setLoading(false);
        });

        return () => unsubscribe();
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
                <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                { isSignedIn ? (
                    profile ? (
                        // Registered User Pages
                        <Stack.Group>
                            {/* Home Screens */}
                            <Stack.Screen name="HomeTabs" component={MainNav} initialParams={{ profile }} />

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
                    ) : (
                        // Authenticated but not registered - Registration Pages
                        <Stack.Group>
                            <Stack.Screen name="RegisterProfile" component={RegisterProfile}/>
                            <Stack.Screen name="RegisterImage">
                                {(props) => <RegisterImage {...props} setProfile={setProfile} />}
                            </Stack.Screen>
                            <Stack.Screen name="Camera" component={Camera} />
                        </Stack.Group>
                    )
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

