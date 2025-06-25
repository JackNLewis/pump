import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home  from './screens/Home'
import Feed from './screens/Feed'
import Create from './screens/Create'
import { Home as HomeIcon, User as UserIcon} from "react-native-feather";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name){
                            case 'Home':
                                return <HomeIcon color={color} fill={color} /> 
                            case 'Feed':
                                return <UserIcon color={color} fill={color} /> 
                        }
                        // You can return any component that you like here!
                        return <HomeIcon color={color} title='Heya' fill={color} /> 
                    },
                    tabBarActiveTintColor: '#00CCA7',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 80,
                        paddingTop:5,
                        paddingBottom: 5,
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
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

