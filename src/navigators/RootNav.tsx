import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useUserContext } from '../common/contexts/UserProvider';
import { View, Text } from 'react-native';
import { useState } from 'react';
import Login from 'features/Login/Login'
import SignUp from 'features/SignUp/SignUp';

const Stack = createStackNavigator();

const DummyComponent = () => <View><Text>Hello world</Text></View>

function RootNav() {

    const { isAuthenticated, isRegistered, isLoading } = useUserContext();

    // Show loading screen while checking authentication
    if (isLoading) {
        return (
            // <View style={styles.loadingContainer}>
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const getScreenComponent = () => {
        console.log(`isAuthenticated ${isAuthenticated} isRegistered ${isRegistered} `)
        // User not logged in
        if (!isAuthenticated) {
            console.log('not authenticated')
            return (
                <Stack.Group>
                    {/* <Stack.Screen name='Dummy' component={DummyComponent} /> */}
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Group>
            )
        }

        // User is authenticated but hasn't completed registration
        if (!isRegistered) {
            console.log('not registered')
            return (
                // Authenticated but not registered - Registration Pages
                <Stack.Group>
                    <Stack.Screen name="Login" component={Login} />

                    {/* <Stack.Screen name="RegisterDetails" component={RegisterDetails} />
            <Stack.Screen name="RegisterImage">
                {(props) => <RegisterImage {...props} setProfile={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="Camera" component={Camera} /> */}
                </Stack.Group>
            )
        }

        console.log('main screens')
        // User is authenticated and has completed registration
        return (
            <Stack.Group>
                <Stack.Screen name='Dummy' component={DummyComponent} />
                {/* Home Screens */}
                {/* <Stack.Screen name="HomeTabs" component={MainNav} /> */}

                {/* Social Screens */}
                {/* <Stack.Screen name="People" component={People} />
            <Stack.Screen name="SearchUser" component={SearchUser} /> */}

                {/* Create Screens */}
                {/* <Stack.Screen name="Create" component={AddWorkout} options={{ gestureEnabled: false }} />
            <Stack.Screen name="SearchExercise" component={SearchExercise} />
            <Stack.Screen name="AddExercise" component={AddExercise} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="PublishWorkout" component={PublishWorkout} /> */}

                {/* Common Screens */}
                {/* <Stack.Screen name="ViewWorkout" component={ViewWorkout} /> */}
            </Stack.Group>
        )
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {getScreenComponent()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNav