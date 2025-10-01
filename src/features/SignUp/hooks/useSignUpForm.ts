import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from 'FireBase';

export const useSignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [password1, setPassword1] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignUp = async () => {
        if (!email || !password1 || !password2) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password1 !== password2) {
            Alert.alert('Error', 'Passwords must match');
            return;
        }

        setLoading(true);
        Keyboard.dismiss();
        
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email.trim(), 
                password1,
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
        password1,
        setPassword1,
        password2,
        setPassword2,
        loading,
        error,
        handleSignUp
    };
};