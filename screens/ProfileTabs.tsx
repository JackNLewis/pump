import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import Stats from './Stats'
import WorkoutHistory from './WorkoutHistory'
import ProfileHeader from '../components/ProfileHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

function ProfileTabs() {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, }]}>
            <ProfileHeader />
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        justifyContent: 'center',
                        paddingBottom: 5,
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: '600',
                    },
                    tabBarActiveTintColor: '#00CCA7',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIndicatorStyle: {
                        height: 0, // This removes the blue indicator line
                    }
                }}>
                <Tab.Screen name="Workouts" component={WorkoutHistory}/>
                <Tab.Screen name="Stats" component={Stats} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default ProfileTabs;