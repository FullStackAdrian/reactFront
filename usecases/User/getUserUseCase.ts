import { UserType } from '../../types/entities/UserType';
import { fetchGetUserById } from '../../services/api/User/getUserById';

export const getUserData = async (id: number): Promise<UserType> => {
    try {
        const data = await fetchGetUserById(id);
        if (data.username === undefined || data.roles === undefined) {
            throw new Error('Incomplete user data');

        }
        const userData: UserType = { userId: data.userId , username: data.username, email: data.email, roles: data.roles };
        return userData;

    } catch (error) {
        throw error;
    }
}
