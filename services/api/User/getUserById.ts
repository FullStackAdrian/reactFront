import { createRequest } from '../api';
import { useAuth } from '../../../hooks/auth/useAuth';
import { GetUserRequest } from '../../../types/dto/User/requests/GetUserRequest';
import { GetUserWithRolesResponse } from '../../../types/dto/User/responses/GetUserWithRolesResponse';

const { token } = useAuth();


export const fetchGetUserById = async (userId: number) => {
    try {
      const api = createRequest(token ? token : undefined);

      const response = await api.get<GetUserWithRolesResponse, GetUserRequest>('user', {
        userId,
      });
      return response;

    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
