import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.route';
import { NavigationContainer } from '@react-navigation/native';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
};