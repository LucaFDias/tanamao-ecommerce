import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputSearch } from '../../components/Input'
import { MaterialIcons } from '@expo/vector-icons'
import { BtnLayout } from '../../components/Button'
import { BtnCredential } from '../../components/ButtonCredential'


export function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Title */}
      <View style={styles.ContainerTitle}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <MaterialIcons name="west" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Crie sua conta!</Text>
        </View>
        <Text style={styles.subtitle}>Vamos criar sua conta</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.containerInput}>
          <Text>Nome completo</Text>
          <InputSearch icon="person" title="Nome completo" />
        </View>
        <View style={styles.containerInput}>
          <Text>E-mail</Text>
          <InputSearch icon="email" title="exemplo@email.com" />
        </View>
        <View style={styles.containerInput}>
          <Text>Senha</Text>
          <InputSearch icon="lock" title="Digite sua senha" />
        </View>
      </View>

      {/* Button  */}
      <View style={styles.btnContainer}>
        <BtnLayout title="Criar" />
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
              color: '#3e4958',
              fontWeight: "500"
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
        <Text
          style={{
            color: "#3E4958",
            fontSize: 14,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Já possui cadastro?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "#3E4958",
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Clique aqui
          </Text>
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
    marginBottom: 12
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24
  },
  containerInput: {
    padding: 24,
    marginTop: 16,
    gap: 6
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
    gap: 6
  },
  btnSignIn: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6
  }
})