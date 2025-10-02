import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from 'FireBase';

export const useSignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignUp = async () => {
        if (!email || !newPassword || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords must match');
            return;
        }

        setLoading(true);
        Keyboard.dismiss();
        
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email.trim(), 
                newPassword,
            );

            return { success: true, user: userCredential.user };
        } catch (error: any) {
            Alert.alert('Sign Up Error', error.message);
            return { success: false, error };
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        newPassword,
        setNewPassword,
        confirmPassword,
        setConfirmPassword,
        loading,
        error,
        handleSignUp
    };
};