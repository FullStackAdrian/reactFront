import React, { createContext, useContext, useState } from 'react';
import { UserContextType } from '../types/context/UserContextType';
import { UserType } from '../types/entities/UserType';

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
    
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}