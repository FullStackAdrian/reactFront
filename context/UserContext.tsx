import React, { createContext, useContext, useState } from 'react';
import { UserContextType } from '../types/context/UserContextType';
// import { RoleContextType } from '../types/RoleContextType';

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    //const [roles, setRoles] = useState<RoleContextType[]>([]); 


    return (
        <UserContext.Provider value={{ username, setUsername, email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}