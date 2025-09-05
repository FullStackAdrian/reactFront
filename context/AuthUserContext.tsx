import React, { createContext, useContext, useState } from 'react';
import { AuthUserContextType } from '../types/context/AuthUserContextType';
import { UserType } from '../types/entities/UserType';

export const AuthUserContext = createContext<AuthUserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    return (
        <AuthUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthUserContext.Provider>
    );
    
}

export const useAuthUserContext = () => {
    const context = useContext(AuthUserContext);
    if (context === null) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}