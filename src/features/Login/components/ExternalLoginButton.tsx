import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { styles } from './ExternalLoginButton.styles'

interface ExternalLoginButtonProps {
    variant: string
}
function ExternalLoginButton({ variant }: ExternalLoginButtonProps) {
    if (variant == "google") {
        return (
            <TouchableOpacity style={styles.googleButton}>
                <Text style={styles.googleButtonText}>Sign In with Google</Text>
            </TouchableOpacity>

        )
    }

    if (variant == "apple") {
        return (
            <TouchableOpacity style={styles.appleButton}>
                <Text style={styles.appleButtonText}>Sign In with Apple</Text>
            </TouchableOpacity>

        )
    }

    return null
}

export default ExternalLoginButton;