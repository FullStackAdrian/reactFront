// screens/HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../hooks/auth/useAuth";

const HomeScreen = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Bienvenido, usuario autenticado</Text>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
