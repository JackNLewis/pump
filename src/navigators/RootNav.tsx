import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useUserContext } from '../common/contexts/UserProvider';

const Stack = createStackNavigator();

function NonAuthenticatedScreens() {
    return (
        (
            // Non-Authenticated Pages
            <Stack.Group>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Group>
        )
    )
}

function NonRegisteredScreens() {
    return (
        // Authenticated but not registered - Registration Pages
        <Stack.Group>
            <Stack.Screen name="RegisterDetails" component={RegisterDetails} />
            <Stack.Screen name="RegisterImage">
                {(props) => <RegisterImage {...props} setProfile={setUser} />}
            </Stack.Screen>
            <Stack.Screen name="Camera" component={Camera} />
        </Stack.Group>
    )
}

function MainScreens() {
    return (
        <Stack.Group>
            {/* Home Screens */}
            <Stack.Screen name="HomeTabs" component={MainNav} />

            {/* Social Screens */}
            <Stack.Screen name="People" component={People} />
            <Stack.Screen name="SearchUser" component={SearchUser} />

            {/* Create Screens */}
            <Stack.Screen name="Create" component={AddWorkout} options={{ gestureEnabled: false }} />
            <Stack.Screen name="SearchExercise" component={SearchExercise} />
            <Stack.Screen name="AddExercise" component={AddExercise} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="PublishWorkout" component={PublishWorkout} />

            {/* Common Screens */}
            <Stack.Screen name="ViewWorkout" component={ViewWorkout} />
        </Stack.Group>
    )
}

function RootNav() {

    const { isAuthenticated, isRegistered } = useUserContext();

    const getScreenComponent = () => {
        // User not logged in
        if (!isAuthenticated) {
            return <NonAuthenticatedScreens />;
        }

        // User is authenticated but hasn't completed registration
        if (!isRegistered) {
            return <NonRegisteredScreens />;
        }

        // User is authenticated and has completed registration
        return <MainScreens />;
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