import React, { createContext, useContext, useState } from 'react';
import { LoadingContextType } from '../types/context/LoadingContextType';

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);
export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <LoadingContext.Provider value={{ loading, setLoading, error, setError }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoadingContext = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error('useLoadingContext must be used within LoadingProvider');
    return context;
};