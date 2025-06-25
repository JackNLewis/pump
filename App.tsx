import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home  from './screens/Home'
import Feed from './screens/Feed'
import Create from './screens/Create'
import { Home as HomeIcon, User as UserIcon} from "react-native-feather";
import MainButton from './components/MainButton';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
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
                        return <MainButton /> 
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
                    component={Home}
                    options={{ headerShown: false, }}
                />
                <Tab.Screen
                    name="Create"
                    component={Create}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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
});

