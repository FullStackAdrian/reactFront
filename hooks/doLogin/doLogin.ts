import { useState } from "react";
import { doLoginUseCase } from "../../usecases/DoLogin/doLoginUseCase";

export const useLogin = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const doLogin = async () => {
    try {
      const loggedUserData = await doLoginUseCase(inputUsername, inputPassword);
      if (loggedUserData) {
        return loggedUserData;
      }
      throw new Error("Login failed");
    } catch (e: any) {
      throw new Error(e.message || "Error al iniciar sesión");
    }
  };
  return { setInputUsername, setInputPassword, doLogin };
};
