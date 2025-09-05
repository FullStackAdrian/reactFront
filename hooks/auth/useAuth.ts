import { useAuthContext } from '../../context/AuthContext';

const TOKEN_KEY = 'access-token';

export const useAuth = () => {
  const { token, setToken } = useAuthContext();
  return { token, setToken };

};

