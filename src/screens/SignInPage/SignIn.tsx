import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { BtnLayout } from "../../components/Button";
import { InputSearch } from "../../components/Input";
import { BtnCredential } from "../../components/ButtonCredential";

// Routes Authentication
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../../routes/auth.route";

export function SignIn() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }
  
  function handleForgotPassword() {
    navigation.navigate("forgot");
  }

  function handleGoBack() {
    navigation.goBack()
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* Header Title */}
      <View style={styles.ContainerTitle}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleGoBack}>
            <MaterialIcons name="west" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Acessar conta</Text>
        </View>
        <Text style={styles.subtitle}>
          Por favor, preencha e-mail e senha para entrar na sua conta!
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.containerInput}>
          <Text>E-mail</Text>
          <InputSearch icon="email" title="exemplo@email.com" />
        </View>
        <View style={styles.containerInput}>
          <Text>Senha</Text>
          <InputSearch icon="lock" title="Digite sua senha" />
        </View>
      </View>

      {/* forgot passowrd */}
      <View style={styles.forgotPass}>
        <Text>Esqueceu sua senha?</Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
      </View>

      {/* Button  */}
      <View style={styles.btnContainer}>
        <BtnLayout title="Acessar conta" />
        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            top: 32,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              backgroundColor: "white",
              paddingHorizontal: 10,
            }}
          >
            Ou cadastre-se com
          </Text>
        </View>
      </View>

      {/* Button Credentials */}
      <View style={styles.containerCredentials}>
        <BtnCredential icon="facebook" type="PRIMARY" />
        <BtnCredential icon="email" />
      </View>

      {/* SignIn */}
      <View style={styles.btnSignIn}>
        <Text>Não possui cadastro?</Text>
        <TouchableOpacity onPress={handleNewAccount}>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
  },
  subtitle: {
    color: "#333333",
    fontSize: 16,
    marginTop: 10
  },
  ContainerTitle: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  formContainer: {
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  containerInput: {
    padding: 24,
    marginTop: 16,
    gap: 6,
  },
  btnContainer: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#D5DDE0",
  },
  containerCredentials: {
    paddingVertical: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  btnSignIn: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  forgotPass: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginTop: 12,
    gap: 4,
  },
})
