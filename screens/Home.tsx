import {Button, StyleSheet, View} from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';

function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Button title='Go To Feed' onPress={() => navigation.navigate("Feed")}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
});

export default Home;