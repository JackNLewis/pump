import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './Login.styes';
import Divider from 'common/components/auth/Divider';
import GoogleLoginButton from 'common/components/auth/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/auth/ui/buttons/AppleLoginButton';
import SignUpPrompt from './components/SignUpPrompt';
import AuthHeader from '../../common/components/auth/AuthHeader';
import LoginForm from './components/LoginForm';
import { spacing } from 'common/styles/spacing';

function Login() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AuthHeader title='Login' subtitle='Log in with your existing account.' />

                <LoginForm />

                <Divider />

                <GoogleLoginButton style={{ marginBottom: spacing.md }} />
                <AppleLoginButton style={{ marginBottom: spacing.md  }} />

                <SignUpPrompt />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;