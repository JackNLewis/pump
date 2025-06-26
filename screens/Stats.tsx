import { StyleSheet, Text, View} from 'react-native';


function Stats() {

    return (
        <View style={styles.container}>
            <Text>Stats Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Stats 