import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Divider from 'common/components/auth/Divider';
import GoogleLoginButton from 'common/components/auth/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/auth/ui/buttons/AppleLoginButton';
import { styles } from './SignUp.styles'
import AuthHeader from 'common/components/auth/AuthHeader';
import LoginPrompt from './components/LoginPrompt';
import SignUpForm from './components/SignUpForm';

function SignUp() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <AuthHeader title='Sign Up' subtitle='Sign Up with your email.' />

                <SignUpForm />

                <Divider />

                <GoogleLoginButton style={{ marginBottom: 16 }} />
                <AppleLoginButton style={{ marginBottom: 16 }} />

                <LoginPrompt />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SignUp;