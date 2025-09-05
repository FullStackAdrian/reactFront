import { fetchDoLogin } from '../../services/api/DoLogin/doLoginService';

export const doLoginUseCase = async (inputUsername: string, inputPassword: string): Promise<{ token: string; userId: number }> => {
    try {
        const data = await fetchDoLogin(inputUsername, inputPassword);
        if (data.token && data.userId) {
            const token : string = data.token;
            const userId : number = data.userId;

            return { token, userId } ;
        }
        throw new Error('Invalid login response');

    } catch (e: any) {
        throw new Error(e.message || 'Error al iniciar sesión');
    }
};