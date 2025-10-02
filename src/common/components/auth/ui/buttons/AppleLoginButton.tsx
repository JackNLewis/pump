import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './AppleLoginButton.styles'

interface AppleLoginButtonProps {
    style?: StyleProp<ViewStyle>;
}

function AppleLoginButton({ style }: AppleLoginButtonProps) {
    return (
        <TouchableOpacity style={[styles.appleButton, style]}>
            <Text style={styles.appleButtonText}>Sign In with Apple</Text>
        </TouchableOpacity>
    )
}

export default AppleLoginButton;