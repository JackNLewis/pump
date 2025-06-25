import { StyleSheet, Text, View } from 'react-native';

function Create() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Workout Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Create;