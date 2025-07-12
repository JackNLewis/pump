import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Text } from 'react-native';
import Stats from './Stats'
import WorkoutHistory from './WorkoutHistory'
import ProfileHeader from '../../components/ProfileHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

function WorkoutScreens() {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, }]}>
            <View style={styles.header}>
                <Text style={styles.title}>WORKOUTS</Text>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: '400',
                    },
                    tabBarActiveTintColor: '#00CCA7',
                    tabBarInactiveTintColor: '#333',
                    tabBarIndicatorStyle: {
                        backgroundColor:'#00CCA7',
                        height: 0, // This removes the blue indicator line
                    },
                     tabBarItemStyle: {
                        width: 'auto',
                        alignItems: 'flex-start',
                    },
                    tabBarContentContainerStyle: {
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                    }

                }}>
                <Tab.Screen name="HISTORY" component={WorkoutHistory} />
                <Tab.Screen name="STATS" component={Stats} />
            </Tab.Navigator>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
})

export default WorkoutScreens;