import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './GoogleLoginButton.styles'

interface GoogleLoginButtonProps {
    style?: StyleProp<ViewStyle>;
}

function GoogleLoginButton({ style }: GoogleLoginButtonProps) {
    return (
        <TouchableOpacity style={[styles.googleButton, style]}>
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
        </TouchableOpacity>
    )
}

export default GoogleLoginButton;