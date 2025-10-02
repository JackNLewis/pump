import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSignUp } from './hooks/useSignUpForm';
import Divider from 'common/components/auth/layout/Divider';
import GoogleLoginButton from 'common/components/auth/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/auth/ui/buttons/AppleLoginButton';
import {styles} from './SignUp.styles'
import AuthHeader from 'features/Login/components/AuthHeader';
import PrimaryButton from 'features/Login/components/PrimaryButton';
import LoginPrompt from './components/LoginPrompt';

function SignUp() {
    const navigation = useNavigation<any>();
    const {
        email,
        setEmail,
        newPassword,
        setNewPassword,
        confirmPassword,
        setConfirmPassword,
        loading,
        error,
        handleSignUp
    } = useSignUp();


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <AuthHeader title='Sign Up' subtitle='Sign Up with your email.'/>

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

                <Divider />

                <GoogleLoginButton  style={{ marginBottom: 16 }}/>
                <AppleLoginButton style={{ marginBottom: 16 }} />

                {/* <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account </Text>
                    <TouchableOpacity onPress={() => navigation.popTo('Login')}>
                        <Text style={styles.loginLink}>Login</Text>
                    </TouchableOpacity>
                </View> */}
                <LoginPrompt />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SignUp;