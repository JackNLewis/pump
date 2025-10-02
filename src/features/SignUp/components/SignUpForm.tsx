import { TextInput } from 'react-native';
import PrimaryButton from 'common/components/auth/ui/buttons/PrimaryButton';
import { styles } from './SignUpForm.styles'

interface SignUpFormProps {
    email: string;
    setEmail: (email: string) => void;
    newPassword: string;
    setNewPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (password: string) => void;
    loading: boolean;
    handleSignUp: () => void;
}

function SignUpForm({
    email,
    setEmail,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    handleSignUp,
}: SignUpFormProps) {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <PrimaryButton
                onPress={handleSignUp}
                loading={loading}
                title="Sign Up"
                loadingText="Signing Up..."
                style={{ marginBottom: 16 }}
            />
        </>
    );
}

export default SignUpForm;
