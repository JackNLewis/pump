import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "FireBase";

function useRegisterDetails() {
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleContinue = async () => {
        try {
            setError('');

            if (!userName.trim()) {
                setError('Username is required');
                return;
            }

            const existingUser = 1

            if (existingUser) {
                setError('Username already taken');
                return;
            }

            // const profile: User = {
            //     firstName,
            //     lastName,
            //     username: username.trim(),
            // };

            // navigation.navigate('RegisterImage', { profile });
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

    return {
        userName,
        setUserName,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        error,
        handleSignOut,
    }
}

export default useRegisterDetails