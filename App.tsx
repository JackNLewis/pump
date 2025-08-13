import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { onSnapshot, doc } from '@firebase/firestore';
import { auth, db } from './FireBase';
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
import { UserContextProvider, UserContext, UserContextType } from './context/userContext';

const Stack = createStackNavigator();

function AppContent() {
    const [isSignedIn, setSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user, setUser } = useContext(UserContext) as UserContextType;
   

    const setupProfileListener = (userId: string, onInitialLoad: () => void) => {
        const userDocRef = doc(db, 'users', userId);
        let isFirstLoad = true;
        
        return onSnapshot(
            userDocRef,
            (doc) => {
                if (doc.exists()) {
                    const userData = doc.data();
                    setUser({
                        id: doc.id,
                        firstName: userData?.firstName || '',
                        lastName: userData?.lastName || '',
                        username: userData?.username || '',
                        imageURI: userData?.imageURI || '',
                        gym: userData?.gym,
                        lastOnline: userData?.lastOnline
                    });
                } else {
                    setUser(null); // Document was deleted
                }
                
                if (isFirstLoad) {
                    isFirstLoad = false;
                    onInitialLoad();
                }
            },
            (error) => {
                console.error('Profile listener error:', error);
                setUser(null);
                if (isFirstLoad) {
                    isFirstLoad = false;
                    onInitialLoad();
                }
            }
        );
    };

    useEffect(() => {
        let unsubscribeProfile: (() => void) | null = null;

        const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
            setSignedIn(!!firebaseUser);

            // Clean up previous profile listener
            if (unsubscribeProfile) {
                unsubscribeProfile();
                unsubscribeProfile = null;
            }

            if (firebaseUser) {
                // Set up real-time profile listener and wait for initial load
                setupProfileListener(firebaseUser.uid, () => {
                    setLoading(false);
                });
            } else {
                // User signed out, clear profile
                setUser(null);
                setLoading(false);
            }
        });

        return () => {
            unsubscribeAuth();
            if (unsubscribeProfile) {
                unsubscribeProfile();
            }
        };
        
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
                        {isSignedIn ? (
                            user ? (
                                // Registered User Pages
                                <Stack.Group>
                                    {/* Home Screens */}
                                    <Stack.Screen name="HomeTabs" component={MainNav} />

                                    {/* Social Screens */}
                                    <Stack.Screen name="People" component={People} />
                                    <Stack.Screen name="SearchUser" component={SearchUser} />

                                    {/* Create Screens */}
                                    <Stack.Screen name="Create" component={AddWorkout} />
                                    <Stack.Screen name="SearchExercise" component={SearchExercise} />
                                    <Stack.Screen name="AddExercise" component={AddExercise} />
                                    <Stack.Screen name="Camera" component={Camera} />

                                    {/* Common Screens */}
                                    <Stack.Screen name="ViewWorkout" component={ViewWorkout} />
                                </Stack.Group>
                            ) : (
                                // Authenticated but not registered - Registration Pages
                                <Stack.Group>
                                    <Stack.Screen name="RegisterProfile" component={RegisterProfile} />
                                    <Stack.Screen name="RegisterImage">
                                        {(props) => <RegisterImage {...props} setProfile={setUser} />}
                                    </Stack.Screen>
                                    <Stack.Screen name="Camera" component={Camera} />
                                </Stack.Group>
                            )
                        ) :
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

export default function App() {
    return (
        <UserContextProvider>
            <AppContent />
        </UserContextProvider>
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

