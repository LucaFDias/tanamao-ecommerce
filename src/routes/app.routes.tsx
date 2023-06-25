import { Home } from '../screens/HomePage/Home';
import { SignIn } from '../screens/SignInPage/SignIn';
import { SignUp } from '../screens/SignUpPage/SignUp';
import { Profile } from '../screens/ProfilePage/Profile';
import { AllProducts } from '../screens/ProductsPage/Products';
import { RecoveryCode } from '../screens/RecoveryCodePage/RecoveryCode';
import { ForgotPassword } from '../screens/ForgotPasswordPage/ForgotPassword';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const { Navigator, Screen } = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderColor: "transparent",
          paddingBottom: 5,
          paddingTop: 5 
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "red",
      }}
      initialRouteName="home"
    >
      <Tab.Screen 
        name="home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />),
        }}  
      />
      <Tab.Screen name="produtos" component={AllProducts}
      options={{
        tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="shopping-cart" color={color} size={size} />),
      }} />
      <Tab.Screen name="login" component={SignIn} 
      options={{
        tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="account-circle" color={color} size={size} />),
      }}/>
      <Tab.Screen name="cadastro" component={SignUp} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="account-circle" color={color} size={size} />),
        }}
      />
      <Tab.Screen name="Perfil" component={Profile} 
        options={{
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="account-circle" color={color} size={size} />),
        }}
      />
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
  tabarContainer: {
    headerShown: false,
    backgroundColor: '#121232',
    borderColor: 'transparent',
  },
})