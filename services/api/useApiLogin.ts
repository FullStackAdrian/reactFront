import { createRequest } from './api'; 
import { AuthResponseType } from '../../types/dto/responses/AuthResponseType';
import { AuthRequestType } from '../../types/dto/requests/AuthRequestType';

export const useApiLogin = () => {
    const fetchLogin = async (username: string , password: string ): Promise<AuthResponseType > => {
        try {
            const api = createRequest(); 
            const response = await api.post<AuthResponseType,AuthRequestType >('/login', {
                username,
                password,
            });

            const authRes = response;

            console.log('Response from login:', authRes);
            return authRes;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error desconocido al hacer login');
        }
    };

    return { fetchLogin };
};
