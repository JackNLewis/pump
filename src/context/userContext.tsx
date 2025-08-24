import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types/types';

export interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType|null>(null);

interface UserProviderProps {
    children: ReactNode;
}

export function UserContextProvider({ children }: UserProviderProps){
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
};


