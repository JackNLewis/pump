import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Text } from 'react-native';
import WorkoutHistory from './history'
import ProfileHeader from '@/components/profileHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Stats from './stats';
import Header from '@/components/header';

const Tab = createMaterialTopTabNavigator();

function HistoryNav() {

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top, }]}>
            <Header title='WORKOUTS'/>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: '500',
                    },
                    tabBarActiveTintColor: '#00CCA7',
                    tabBarInactiveTintColor: '#333',
                    tabBarIndicatorStyle: {
                        backgroundColor:'#00CCA7',
                        height:1,
                    },
                    tabBarContentContainerStyle: {
                        paddingHorizontal: 10,
                    }

                }}>
                <Tab.Screen name="History" component={WorkoutHistory} />
                <Tab.Screen name="Stats" component={Stats} />
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

export default HistoryNav;