import { useAuth } from '../../../hooks/auth/useAuth';
import { getUserData } from '../User/ getUserHandler';
import { doLogin as doLoginService } from '../../../services/api/DoLogin/doLogin';

const { updateToken } = useAuth();
const { fetchDoLogin } = doLoginService();

export const doLogin = async (inputUsername: string, inputPassword: string) => {
    try {
        const data = await fetchDoLogin(inputUsername, inputPassword);
        if (data.token && data.userId) {
            await updateToken(data.token);
            await getUserData(data.userId);
        }

    } catch (e: any) {
        throw new Error(e.message || 'Error al iniciar sesión');
    }
};