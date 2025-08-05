import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../FireBase';

function Login() {
    const navigation = useNavigation<any>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email.trim(), password);
            Alert.alert('Success', 'Login successful!');
        } catch (error: any) {
            Alert.alert('Login Error', error.message);
        } finally {
            setLoading(false);
        }
    };

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
                
                <TouchableOpacity 
                    style={[styles.loginButton, loading && styles.loginButtonDisabled]} 
                    onPress={handleLogin}
                    disabled={loading}
                >
                    <Text style={styles.loginButtonText}>
                        {loading ? 'Logging In...' : 'Login'}
                    </Text>
                </TouchableOpacity>
                
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.dividerLine} />
                </View>
                
                <TouchableOpacity style={styles.googleButton}>
                    <Text style={styles.googleButtonText}>Sign In with Google</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.appleButton}>
                    <Text style={styles.appleButtonText}>Sign In with Apple</Text>
                </TouchableOpacity>
                
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
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    loginButton: {
        backgroundColor: '#00CCA7',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButtonDisabled: {
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
        borderRadius: 8,
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
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    appleButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        color: '#666',
        fontSize: 14,
    },
    signupLink: {
        color: '#00CCA7',
        fontSize: 14,
        fontWeight: '500',
    }
});

export default Login;