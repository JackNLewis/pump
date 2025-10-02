import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './SignUpPrompt.styles';

interface SignUpPromptProps {
    style?: StyleProp<ViewStyle>;
}

function SignUpPrompt({ style }: SignUpPromptProps) {
    const navigation = useNavigation<any>();

    return (
        <View style={[styles.signupContainer, style]}>
            <Text style={styles.signupText}>Don't have an account, </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpPrompt