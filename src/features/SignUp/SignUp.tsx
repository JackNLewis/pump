import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSignUp } from './hooks/useSignUpForm';
import Divider from 'common/components/layout/Divider';
import GoogleLoginButton from 'common/components/ui/buttons/GoogleLoginButton';
import AppleLoginButton from 'common/components/ui/buttons/AppleLoginButton';

function SignUp() {
    const navigation = useNavigation<any>();
    const {
        email,
        setEmail,
        password1,
        setPassword1,
        password2,
        setPassword2,
        loading,
        error,
        handleSignUp
    } = useSignUp();


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>Sign Up with your email.</Text>

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
                    value={password1}
                    onChangeText={setPassword1}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    value={password2}
                    onChangeText={setPassword2}
                />

                <TouchableOpacity
                    style={[styles.signupButton, loading && styles.signupButtonDisabled]}
                    onPress={handleSignUp}
                    disabled={loading}
                >
                    <Text style={styles.signupButtonText}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </Text>
                </TouchableOpacity>

                <Divider />

                <GoogleLoginButton />
                <AppleLoginButton />

                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account </Text>
                    <TouchableOpacity onPress={() => navigation.popTo('Login')}>
                        <Text style={styles.loginLink}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#00CCA7',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    signupButton: {
        backgroundColor: '#00CCA7',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    signupButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    signupButtonDisabled: {
        backgroundColor: '#80E6D4',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    dividerText: {
        marginHorizontal: 15,
        color: '#666',
        fontSize: 14,
    },
    googleButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    googleButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '500',
    },
    appleButton: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    appleButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#666',
        fontSize: 14,
    },
    loginLink: {
        color: '#00CCA7',
        fontSize: 14,
        fontWeight: '500',
    }
});

export default SignUp;