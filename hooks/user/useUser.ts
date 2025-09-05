import { useState } from 'react';
import { getUserData } from '../../usecases/User/getUserUseCase';
import { UserType } from '../../types/entities/UserType';

export const useUser = () => {  
  const [user, setUser] = useState<UserType | null>(null);

  const getUser = async (id: number) => {
    try {

      const user = await getUserData(id);
      setUser(user);

    } catch (error) {
      throw error;
    }

  }

  return { user , getUser};

};
