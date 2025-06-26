import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './screens/Feed'
import Create from './screens/Create'
import Profile from './screens/Profile';
import { Home as HomeIcon, User as UserIcon} from "react-native-feather";
import CreateWorkoutButton from './components/CreateWorkoutButton';
import React, { useState } from 'react';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const DummyScreen = () => null;


export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [isSignedIn, setSignedIn] = useState(false);

    return (
        <NavigationContainer>
            { isSignedIn ? (
                <>
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
                                return <CreateWorkoutButton /> 
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
                        component={Feed}
                        options={{ headerShown: false, }}
                    />
                    <Tab.Screen
                        name="Create"
                        component={DummyScreen}
                        listeners={{
                            tabPress: e => {
                            e.preventDefault(); // Prevent default navigation
                            setModalVisible(true); // Show modal instead
                            },
                        }}
                        options={{ tabBarLabel: 'Open Modal' }}
                    />
                    <Tab.Screen
                        name="Feed"
                        component={Profile}
                        options={{ headerShown: false }}
                    />
                    </Tab.Navigator>
                    <Create modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </>
                ) : 
                (
                <>
                    <Stack.Navigator>
                         <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Navigator>
                </>
                )}

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

