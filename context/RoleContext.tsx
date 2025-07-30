import React, { createContext, use, useContext, useState } from 'react';
import { RoleContextType } from '../types/context/RoleContextType';
import { PermissionType } from '../types/dto/PermissionType';

export const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {

    const [id, setId] = useState<number | null>(null);
    const [roleName, setRoleName] = useState<string | null>(null);
    const [permissions, setPermissions] =  useState<PermissionType[]>([])
    
    return (
        <RoleContext.Provider value={{ id, setId, roleName, setRoleName, permissions, setPermissions }}>
            {children}
        </RoleContext.Provider>
    );
}