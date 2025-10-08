import { TextInput } from 'react-native';
import PrimaryButton from 'common/components/auth/ui/buttons/PrimaryButton';
import { styles } from './SignUpForm.styles'
import { useSignUp } from '../hooks/useSignUpForm';

function SignUpForm() {
    const {
        email,
        setEmail,
        newPassword,
        setNewPassword,
        confirmPassword,
        setConfirmPassword,
        loading,
        handleSignUp
    } = useSignUp();
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
