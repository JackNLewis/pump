import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stats from './Stats'
import History from './History'
import { useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

function Profile() {

    const insets = useSafeAreaInsets();

    return (
            <Tab.Navigator
             screenOptions={{
                tabBarStyle: {
                        justifyContent: 'center',
                        paddingTop: insets.top,
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
                },
             }}>
                <Tab.Screen name="History" component={History} />
                <Tab.Screen name="Stats" component={Stats} />
            </Tab.Navigator>
    );
}

export default Profile;