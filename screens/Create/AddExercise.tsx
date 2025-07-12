import { StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native';
import { X } from "react-native-feather";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddExerciseButton from '../../components/AddExerciseButton';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function AddExercise() {
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    return (

        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>WORKOUT</Text>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <X stroke="#000" width={24} height={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <AddExerciseButton onPress={() => navigation.navigate('AddSet')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AddExercise;