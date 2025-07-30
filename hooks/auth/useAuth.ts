import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from '../../context/AuthContext';
import { useApiLogin } from '../../services/api/useApiLogin';

const TOKEN_KEY = 'access_token';

export const useAuth = () => {
  const { token, setToken } = useAuthContext();
  const { fetchLogin } = useApiLogin();

  const login = async (username: string | null, password: string | null) => {
    // Validación de campos
    if (!username || !password) {
      throw new Error('Por favor, ingresa un nombre de usuario y una contraseña validos');
    }

    try {
      const data = await fetchLogin(username, password);
      if (data.token) {
        AsyncStorage.setItem(TOKEN_KEY, data.token);
        setToken(data.token);
      }
    } catch (error) {
      throw error;
    }

  };

  const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  const loadToken = async () => {
    const storedToken = await AsyncStorage.getItem(TOKEN_KEY);
    setToken(storedToken);
  };

  return { token, login, logout, loadToken };
};

