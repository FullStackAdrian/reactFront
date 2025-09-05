import { View, TextInput, Button, Text } from 'react-native';
 // Importa tu contexto

const LoginScreen = () => {

  return (
    <View>
      <TextInput placeholder="Usuario" onChangeText={setInputUsername} />
      <TextInput placeholder="Contraseña" secureTextEntry onChangeText={setInputPassword} />
      {error && <Text>{error}</Text>}
      <Button title="Iniciar sesión" onPress={handleLogin} disabled={loading} />
    </View>)
};

export default LoginScreen;
