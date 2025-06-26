import { StyleSheet, Text, View, Modal, Button } from 'react-native';

type CreateProps = {
    modalVisible: boolean
    setModalVisible: (visible: boolean) => void
}

function Create({modalVisible, setModalVisible} : CreateProps) {
    return (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
            <View style={styles.container}>
                <Text style={styles.title}>This is a modal!</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
        </Modal>
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