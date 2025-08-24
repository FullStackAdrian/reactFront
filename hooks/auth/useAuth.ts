import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from '../../context/AuthContext';

const TOKEN_KEY = 'access-token';

export const useAuth = () => {
  const { token, setToken } = useAuthContext();

  const updateToken = async (token: string) => {
    AsyncStorage.setItem(TOKEN_KEY, token);
    setToken(token);

  };

  const deleteToken = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    setToken(null);

  };

  return { token, updateToken,  deleteToken };
};

