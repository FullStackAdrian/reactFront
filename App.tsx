import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/AuthUserContext";
import { LoadingProvider } from "./context/LoadingContext";

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <LoadingProvider>
          <AppNavigator />
        </LoadingProvider>
      </UserProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
