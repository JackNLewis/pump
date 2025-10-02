import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoginPrompt.styles';

interface SignUpPromptProps {
    style?: StyleProp<ViewStyle>;
}

function LoginPrompt({ style }: SignUpPromptProps) {
    const navigation = useNavigation<any>();

    return (
        <View style={[styles.signupContainer, style]}>
            <Text style={styles.signupText}>Already have an account, </Text>
            <TouchableOpacity onPress={() => navigation.popTo('Login')}>
                <Text style={styles.signupLink}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginPrompt