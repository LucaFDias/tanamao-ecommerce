import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { MaterialIcons } from "@expo/vector-icons"
import { BtnLayout } from "../../components/Button"

export function RecoveryCode() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Title */}
      <View style={styles.ContainerTitle}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <MaterialIcons name="west" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Recuperar senha</Text>
        </View>
        <Text style={styles.subtitle}>
          O código de recuperação foi enviado para o seu número. O tempo de
          expiração do código é de 120 segundos.
        </Text>
        <Text>Por favor, insira o código:</Text>
      </View>

      {/* Recovery code */}
      <View style={styles.containerCode}>
        <View style={styles.cardCode}></View>
        <View style={styles.cardCode}></View>
        <View style={styles.cardCode}></View>
        <View style={styles.cardCode}></View>
      </View>

      <View style={{ paddingHorizontal: 24, marginBottom: 30 }}>
        <BtnLayout title="Continuar" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  ContainerTitle: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
  },
  subtitle: {
    color: "#333333",
    fontSize: 16,
    marginTop: 10,
  },
  containerCode: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardCode: {
    height: 60,
    width: 60,
    gap: 16,
    backgroundColor: "#F7F8F9",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D5DDE0',
    alignItems: "center",
  },
})
