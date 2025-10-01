import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Login.styes';
import Divider from '../../common/components/layout/Divider';
import GoogleLoginButton from 'common/components/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/ui/buttons/AppleLoginButton';
import useLoginForm from './hooks/useLoginForm';
import PrimaryButton from './components/PrimaryButton';

function Login() {
    const navigation = useNavigation<any>();

    const { email, setEmail, password, setPassword, loading, error, handleLogin } = useLoginForm();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Log in with your existing account.</Text>

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
                />

                <Divider />

                <GoogleLoginButton />
                <AppleLoginButton />

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account, </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signupLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;