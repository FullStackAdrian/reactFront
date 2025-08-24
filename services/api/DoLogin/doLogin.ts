import { createRequest } from '../api'; 
import { DoLoginResponseType } from '../../../types/dto/DoLogin/responses/DoLoginResponseType';
import { DoLoginRequestType } from '../../../types/dto/DoLogin/requests/DoLoginRequestType';

export const doLogin = () => {
    const fetchDoLogin = async (username: string , password: string ): Promise<DoLoginResponseType > => {
        try {
            const api = createRequest(); 
            const response = await api.post<DoLoginResponseType,DoLoginRequestType >('/login', {
                username,
                password,
            });

            return response;
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Error desconocido al hacer login');
        }
    };

    return { fetchDoLogin };
};
