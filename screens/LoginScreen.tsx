import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth/useAuth';
import { useUser } from '../hooks/user/useUser';
import { useLoadingContext } from '../context/LoadingContext'; // Importa tu contexto


const LoginScreen = () => {
  const { login } = useAuth();
  const { inputUsername, setInputUsername, inputPassword, setInputPassword } = useUser();
  const navigation = useNavigation<any>();
  const { loading, setLoading, error, setError } = useLoadingContext();
  
  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await login(inputUsername, inputPassword);
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
