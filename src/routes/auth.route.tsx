import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignInPage/SignIn";
import { SignUp } from "../screens/SignUpPage/SignUp";
import { ForgotPassword } from "../screens/ForgotPasswordPage/ForgotPassword";


type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  forgot: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() { 
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgot" component={ForgotPassword}/>
    </Navigator>
  )

}