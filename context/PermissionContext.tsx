import React, { createContext, useContext, useState } from 'react';
import { PermissionType } from '../types/dto/PermissionType';

export const PermissionContext = createContext<PermissionType | null>(null);

export const PermissionProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [id, setId] = useState<number | null>(null);
    const [type, setType] = useState<string | null>(null);
    const [action, setAction] = useState<string | null>(null);
    
    return   (<PermissionContext.Provider value={{ id, setId, type, setType, action, setAction }}>
        {children}
    </PermissionContext.Provider>);
}

export const usePermissionContext = () => {
    const context = useContext(PermissionContext);
    if (!context) throw new Error('usePermissionContext must be used within PermissionProvider');
    return context;
}