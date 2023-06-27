import { Home } from '../screens/HomePage/Home';
import { SignIn } from '../screens/SignInPage/SignIn';
import { Cart } from '../screens/CartPage/Cart';
import { SignUp } from '../screens/SignUpPage/SignUp';
import { Profile } from '../screens/ProfilePage/Profile';
import { AllProducts } from '../screens/ProductsPage/Products';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import {
  MaterialIcons,
  Feather,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { Category } from '../screens/CategoryPage/Category';
import { Favorites } from '../screens/FavoritesPages/Favorites';

type AppRoutes = {
  home: undefined;
  category: undefined;
  favorites: undefined;
  shopping: undefined;
  more: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>


const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderColor: "white",
          paddingHorizontal: 12,
        },
        tabBarActiveTintColor: "#222cb8",
        tabBarInactiveTintColor: "#999999",
      }}
      initialRouteName="home"
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="category"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="shopping"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="more"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
};