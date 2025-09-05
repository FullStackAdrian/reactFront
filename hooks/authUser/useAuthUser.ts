import { useAuthUserContext } from '../../context/AuthUserContext';

export const useAuthUser = () => {
    const { user, setUser } = useAuthUserContext();
    return { user, setUser };

}
