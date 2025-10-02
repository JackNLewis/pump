import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { signOut } from 'firebase/auth';


function RegisterDetails() {
    const navigation = useNavigation<any>();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleContinue = async () => {
        try {
            setError('');
            
            if (!username.trim()) {
                setError('Username is required');
                return;
            }
            
            const existingUser = await getUserByUsername(username.trim());
            
            if (existingUser) {
                setError('Username already taken');
                return;
            }
            
            const profile: User = {
                firstName,
                lastName,
                username: username.trim(),
            };
            
            navigation.navigate('RegisterImage', { profile });
        } catch (error) {
            console.error('Error checking username:', error);
            setError('Error checking username availability');
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            setError('Error signing out');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Create a profile</Text>
                <Text style={styles.subtitle}>Enter some final details.</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor={colors.grey[500]}
                    autoCapitalize="none"
                    value={username}
                    onChangeText={setUsername}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor={colors.grey[500]}
                    value={firstName}
                    onChangeText={setFirstName}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor={colors.grey[500]}
                    value={lastName}
                    onChangeText={setLastName}
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <TouchableOpacity 
                    style={styles.continueButton} 
                    onPress={handleContinue}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={handleSignOut}>
                    <Text style={styles.goBackText}>Sign Out</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    );
}

export default RegisterDetails;