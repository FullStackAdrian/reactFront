// hoc/withAuth.tsx
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth/useAuth';
import { ActivityIndicator } from 'react-native';
import { useLoadingContext } from '../context/LoadingContext';

export default function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
  return (props: P) => {
    const { token } = useAuth();
    const { loading } = useLoadingContext(); // Assuming useAuth provides a loading state
    const navigation = useNavigation<any>();

    useEffect(() => {
      if (!loading && !token) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    }, [loading, token]);

    if (loading || !token) {
      return <ActivityIndicator />;
    }    

    return <WrappedComponent {...props} />;
  };
}
// This HOC can be used to wrap any component that requires authentication.
// It will redirect to the Login screen if the user is not authenticated or if the loading state  is true.
// Example usage:
// export default withAuth(HomeScreen);
// This will ensure that the HomeScreen is only accessible when the user is authenticated and the loading state is false.
// If the user is not authenticated, it will redirect to the Login screen.
// If the loading state is true, it will show an ActivityIndicator until the authentication state is resolved.
// Make sure to import this HOC in your component file and wrap your component with it.