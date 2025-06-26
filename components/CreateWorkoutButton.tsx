import {StyleSheet, View} from 'react-native';
import { Plus } from 'react-native-feather';

function CreateWorkoutButton() {
    return (
        <View style={styles.container}>
            <Plus color={'white'} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CCA7',
    borderRadius: 8,
    width: 40,
    height: 40,
  },
});

export default CreateWorkoutButton;