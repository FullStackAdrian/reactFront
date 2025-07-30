import { createRequest } from './api'; // Asegúrate de importar correctamente
import { AuthType } from '../../types/dto/AuthType'; // Asegúrate de importar tu tipo correctamente

export const useApiLogin = () => {
    const fetchLogin = async (username: string | null, password: string | null): Promise<AuthType | null> => {
        try {
            const api = createRequest(); // Sin token, porque estamos haciendo login

            const response = await api.post<any>('/login', {
                username,
                password,
            });

            const authRes: AuthType = response.content.viewModel
                ? JSON.parse(JSON.stringify(response.content.viewModel))
                : null;

            console.log('Response from login:', authRes);
            return authRes;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error desconocido al hacer login');
        }
    };

    return { fetchLogin };
};
