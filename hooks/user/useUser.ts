import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext';

export const useUser = () => {
  const { username, setUsername, email, setEmail } = useUserContext();
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const getUserInfo = () => {

    return { username, email };
  };

  const updateUser = (newUsername: string | null, newEmail: string | null) => {
    if (newUsername) {
      setUsername(newUsername);
    }
    if (newEmail) {
      setEmail(newEmail);
    }
  };

  return { getUserInfo, updateUser, username, setUsername, email, setEmail,
     inputUsername, setInputUsername, inputEmail, setInputEmail, inputPassword,
      setInputPassword, inputConfirmPassword, setInputConfirmPassword };

};
