import React, { useState } from 'react';
import { doLogin } from '../../usecases/DoLogin/doLoginUseCase';

export const useLogin = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const handleLogin = async () => {
        try {
            const loggedUserData = await doLogin(inputUsername, inputPassword);
            if (loggedUserData) {
                return loggedUserData;
            }
            throw new Error('Login failed');
        } catch (e: any) {
            throw new Error(e.message || 'Error al iniciar sesión');
        }
    };
    return { setInputUsername, setInputPassword, handleLogin };
}