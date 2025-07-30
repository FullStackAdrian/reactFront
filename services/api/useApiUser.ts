import { useUser } from '../../hooks/user/useUser';

export const useApiUser = () => {

  const fetchGetUser = async (token: string | null, username: string) => {
    try {
      const response = await fetch(`https://api.example.com/${username}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };

  const fetchUpdateUser = async (username: string | null, email: string | null) => {
    
  };
  return { fetchGetUser, fetchUpdateUser };
};