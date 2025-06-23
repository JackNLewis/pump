import {Button, StyleSheet, Text, View} from 'react-native';


function Feed() {
    return (
        <View style={styles.container}>
            <Button title='Go To Home' />
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
});

export default Feed;