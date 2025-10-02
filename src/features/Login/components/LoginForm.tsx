import { TextInput } from 'react-native';
import PrimaryButton from 'common/components/auth/ui/buttons/PrimaryButton';
import { styles } from './LoginForm.styles';

interface LoginFormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    loading: boolean;
    handleLogin: () => void;
}

function LoginForm({
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
}: LoginFormProps) {
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
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <PrimaryButton
                onPress={handleLogin}
                loading={loading}
                title="Login"
                loadingText="Logging In..."
                style={{ marginBottom: 16 }}
            />
        </>
    );
}

export default LoginForm;
