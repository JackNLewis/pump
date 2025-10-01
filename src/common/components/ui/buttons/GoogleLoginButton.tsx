import { TouchableOpacity, Text } from 'react-native';
import { styles } from './GoogleLoginButton.styles'


function GoogleLoginButton() {
    return (
        <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
        </TouchableOpacity>
    )
}

export default GoogleLoginButton;