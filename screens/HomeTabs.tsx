import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './ProfileTabs';
import { Home as HomeIcon, User as UserIcon } from "react-native-feather";
import CreateWorkoutButton from '../components/CreateWorkoutButton';
import { useNavigation } from '@react-navigation/native';
import Feed from './Feed';


const Tab = createBottomTabNavigator();

const DummyScreen = () => null;

function HomeTabs() {
    const navigation = useNavigation<any>();
    
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    switch (route.name) {
                        case 'Feed':
                            return (
                                <View style={styles.iconContainer}>
                                    <HomeIcon color={color} fill={color} />
                                    {focused && <View style={styles.underline} />}
                                </View>
                            )
                        case 'Profile':
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
                    paddingTop: 10,
                    paddingBottom: 5,
                },
                tabBarShowLabel: false,
            })}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{ headerShown: false, }}
            />
            <Tab.Screen
                name="Create"
                component={DummyScreen}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        navigation.navigate('AddSet');
                    },
                }}
                options={{ tabBarLabel: 'Open Modal' }}
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
