import { StyleSheet, Text, View} from 'react-native';


function History() {

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
    backgroundColor: 'purple'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default History 