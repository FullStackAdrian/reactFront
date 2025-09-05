import { useState } from "react";
import { useAuthUser } from "../authUser/useAuthUser";

export const useLogout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const { setUser } = useAuthUser();

  const logout = () => {
    setUser(null);
    setIsLoggedOut(true);
  };

  return { logout, isLoggedOut };
};
