import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../models/user';


interface UserProviderProps {
    children: ReactNode;
}

export interface UserContextType {
    isAuthenticated: boolean
    isRegistered: boolean
    user: User
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: UserProviderProps){

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState<boolean>(false);

    return (
        <UserContext.Provider value={{isAuthenticated, isRegistered} as UserContextType}>
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


