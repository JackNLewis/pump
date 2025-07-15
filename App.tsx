import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Create from './screens/Create/AddExercise'
import Profile from './screens/Workout/WorkoutScreens';
import { Home as HomeIcon, User as UserIcon} from "react-native-feather";
import CreateWorkoutButton from './components/CreateWorkoutButton';
import React, { useState, useEffect } from 'react';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import supabase from './SupaBase';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddExercise from './screens/Create/AddExercise';
import HomeTabs from './screens/HomeTabs';
import People from './screens/People';
import AddSet from './screens/Create/AddSet';
import CreateScreens from './screens/Create/CreateScreens'
import SearchUser from './screens/SearchUser';
import ViewWorkout from './screens/ViewWorkout';


const Stack = createStackNavigator();

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
                <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}>
                { isSignedIn ? (
                    // Authenticated Pages
                    <Stack.Group>
                        <Stack.Screen name="HomeTabs" component={HomeTabs} />
                        <Stack.Screen name="Create" component={CreateScreens} options={{
                            cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                            gestureEnabled: false,
                        }}/>
                        <Stack.Screen name="People" component={People} />
                        <Stack.Screen name="SearchUser" component={SearchUser} />
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

