import { View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './Login.styes';
import Divider from 'common/components/auth/layout/Divider';
import GoogleLoginButton from 'common/components/auth/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/auth/ui/buttons/AppleLoginButton';
import useLoginForm from './hooks/useLoginForm';
import PrimaryButton from '../../common/components/auth/ui/buttons/PrimaryButton';
import SignUpPrompt from './components/SignUpPrompt';
import AuthHeader from '../../common/components/auth/AuthHeader';
import LoginForm from './components/LoginForm';

function Login() {


    const { email, setEmail, password, setPassword, loading, error, handleLogin } = useLoginForm();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AuthHeader title='Login' subtitle='Log in with your existing account.' />

                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    loading={loading}
                    handleLogin={handleLogin}
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