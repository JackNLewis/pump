
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import AddWorkout from './AddWorkout';
import AddExercise from './AddExercise';
import SearchExercise from '../SearchExercise';
import Camera from '../Camera';

const CreateStack = createStackNavigator();

function CreateScreens() {

    return (
        <View style={styles.container}>
            <CreateStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <CreateStack.Screen name='AddWorkout' component={AddWorkout} />
                <CreateStack.Screen name='AddExercise' component={AddExercise} />
                <CreateStack.Screen name="SearchExercise" component={SearchExercise} />
                <CreateStack.Screen name="Camera" component={Camera} />
            </CreateStack.Navigator>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 25,
        backgroundColor:'white'
    },
});

export default CreateScreens;