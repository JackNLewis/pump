import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutScreens from './Workout/WorkoutScreens';
import { Home as HomeIcon, User as UserIcon, Compass as CompassIcon, Book as BookIcon } from "react-native-feather";
import CreateWorkoutButton from '../components/CreateWorkoutButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import Explore from './Explore';
import Profile from './Profile';
import Exercises from './Exercises';


const Tab = createBottomTabNavigator();

const DummyScreen = () => null;

const TabOptions = ({route} : any) => ({
        tabBarIcon: ({ color, focused } : any) => {
                    switch (route.name) {
                        case 'Exercises':
                            return (
                                <View style={styles.iconContainer}>
                                    <BookIcon color={color} />
                                    {focused && <View style={styles.underline} />}
                                </View>
                            )
                        case 'Explore':
                            return (
                                <View style={styles.iconContainer}>
                                    <CompassIcon color={color}  />
                                    {focused && <View style={styles.underline} />}
                                </View>
                            )
                        case 'WorkoutTabs':
                            return (
                                <View style={styles.iconContainer}>
                                    <HomeIcon color={color} />
                                    {focused && <View style={styles.underline} />}
                                </View>
                            )
                        case 'Profile':
                            return (
                                <View style={styles.iconContainer}>
                                    <UserIcon color={color}/>
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
            paddingTop: 10,
            paddingBottom: 5,
        },
        tabBarShowLabel: false,
        });
    
function HomeTabs() {
    const navigation = useNavigation<any>();
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={TabOptions}
        >
            <Tab.Screen
                name="Exercises"
                component={Exercises}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{ headerShown: false, }}
            />
            <Tab.Screen
                name="AddExercise"
                component={DummyScreen}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('Create');
                    },
                }}
                options={{ tabBarLabel: 'Open Modal' }}
            />
            <Tab.Screen
                name="WorkoutTabs"
                component={WorkoutScreens}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabs

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
