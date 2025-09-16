import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { spacing } from '@/styles/spacing';
import { getUserByUsername } from '@/api/users';
import { auth } from '@/FireBase';
import { User } from '@/types/types';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: typography.fontWeight.bold,
        color: colors.primary[500],
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        color: colors.grey[600],
        textAlign: 'center',
        marginBottom: spacing.xxl,
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: spacing.md,
        marginBottom: spacing.md,
        fontSize: typography.fontSize.md,
        borderWidth: 1,
        borderColor: colors.grey[300],
    },
    continueButton: {
        backgroundColor: colors.primary[500],
        borderRadius: 8,
        padding: spacing.md,
        alignItems: 'center',
        marginTop: spacing.lg,
        marginBottom: spacing.lg,
    },
    continueButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
    },
    error: {
        color: 'red',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        textAlign: 'center',
    },
    goBackText: {
        color: colors.primary[500],
        fontSize: typography.fontSize.md,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
});

export default RegisterDetails;