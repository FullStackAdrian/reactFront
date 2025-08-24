import React, { useState } from 'react';
import { getUserData } from '../../handlers/service/User/ getUserHandler';
import { useUserContext } from '../../context/UserContext';
import { UserType } from '../../types/entities/UserType';

const { user, setUser } = useUserContext();

export const useUser = () => {
  const getUser = async (id: number): Promise<UserType> => {
    try {
      if (user !== null) {
        if (user.userId === id) {
          return user;
        }
      }
      const userData = await getUserData(id);
      return userData;

    } catch (error) {
      throw error;
    }

  }

  const setUser = async (id: number, user: UserType) => {
    try {
      const user = await getUserData(id);

    } catch (error) {
      throw error;
    }
  }

  return { getUser };

};
