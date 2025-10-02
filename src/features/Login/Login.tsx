import { View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './Login.styes';
import Divider from 'common/components/auth/layout/Divider';
import GoogleLoginButton from 'common/components/auth/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/auth/ui/buttons/AppleLoginButton';
import useLoginForm from './hooks/useLoginForm';
import PrimaryButton from './components/PrimaryButton';
import SignUpPrompt from './components/SignUpPrompt';
import AuthHeader from './components/AuthHeader';

function Login() {
    

    const { email, setEmail, password, setPassword, loading, error, handleLogin } = useLoginForm();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AuthHeader title='Login' subtitle='Log in with your existing account.' />

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

                <Divider />

                <GoogleLoginButton style={{ marginBottom: 16 }} />
                <AppleLoginButton style={{ marginBottom: 16 }} />

               <SignUpPrompt />
                
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;