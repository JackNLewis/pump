import { TouchableOpacity, Text } from 'react-native';
import { styles } from './AppleLoginButton.styles'


function AppleLoginButton() {
    return (
        <TouchableOpacity style={styles.appleButton}>
            <Text style={styles.appleButtonText}>Sign In with Apple</Text>
        </TouchableOpacity>
    )
}

export default AppleLoginButton;