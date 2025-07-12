import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import Stats from './Stats'
import WorkoutHistory from './WorkoutHistory'
import ProfileHeader from '../../components/ProfileHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

function WorkoutScreens() {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, }]}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 24,
                        fontWeight: 'bold',
                    },
                    tabBarActiveTintColor: '#00CCA7',
                    tabBarInactiveTintColor: '#333',
                    tabBarIndicatorStyle: {
                        height: 0, // This removes the blue indicator line
                    },
                    tabBarItemStyle: {
                        width: 'auto',
                        alignItems: 'flex-start',
                    },
                    tabBarContentContainerStyle: {
                        justifyContent: 'space-between',
                        paddingHorizontal: 0,
                    }
                }}>
                <Tab.Screen name=" WORKOUTS" component={WorkoutHistory} />
                <Tab.Screen name="STATS" component={Stats} />
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

export default WorkoutScreens;