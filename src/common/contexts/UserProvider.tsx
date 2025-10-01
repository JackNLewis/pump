import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../models/user';
import { useEffect } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from 'FireBase';
import { getUser } from 'common/api/userapi';

interface UserProviderProps {
    children: ReactNode;
}

export interface UserContextType {
    isAuthenticated: boolean
    isRegistered: boolean
    isLoading: boolean
    user: User
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: UserProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User>({} as User);

    // Async function to check registration status
    const checkRegistration = async (uuid: string) => {
        try {
            const user = await getUser(uuid);
            if (user) {
                setIsRegistered(true);
            }
        } catch (error) {
            console.error('Error checking user registration:', error);
            setIsRegistered(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);

        // Check if user is Authenticated via firebase auth
        const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser) {
                console.log(firebaseUser);
                console.log(`found user ${firebaseUser}`)
                setIsAuthenticated(true);
                const uuid = firebaseUser.uid; // or however you get the uuid

                // Call the async function
                checkRegistration(uuid);
                setIsLoading(false);
            } else {
                setIsAuthenticated(false);
                setIsRegistered(false);
                setIsLoading(false);
            }
        });

        return unsubscribeAuth;
    }, []);

    return (
        <UserContext.Provider value={{ isAuthenticated, isRegistered, isLoading } as UserContextType}>
            {children}
        </UserContext.Provider>
    );
};


export function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
}


