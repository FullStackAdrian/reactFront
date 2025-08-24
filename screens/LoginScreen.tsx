import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth/useAuth';
import { useUser } from '../hooks/user/useUser';
import { useLoadingContext } from '../context/LoadingContext'; // Importa tu contexto

const LoginScreen = () => {
  
  const { updateToken: login} = useAuth();
  const navigation = useNavigation<any>();
  const { userId, getUser } = useUser();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { loading, setLoading, error, setError } = useLoadingContext();
  
  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const authenticatedUserId = await login(inputUsername, inputPassword);
      authenticatedUserId && await getUser(authenticatedUserId); 
      navigation.navigate('Home');
    } catch (e: any) {
      setError(e.message || 'Error al iniciar sesión');
    }
    setLoading(false);
  };

  return (
    <View>
      <TextInput placeholder="Usuario" onChangeText={setInputUsername} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setInputPassword} />
      {error && <Text>{error}</Text>}
      <Button title="Iniciar sesión" onPress={handleLogin} disabled={loading} />
    </View>)
};

export default LoginScreen;
