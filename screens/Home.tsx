import {StyleSheet, View, Text} from 'react-native';

function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>   
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Home;