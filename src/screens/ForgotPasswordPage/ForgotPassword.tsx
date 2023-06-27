import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { MaterialIcons } from "@expo/vector-icons";

export function ForgotPassword() {
  
  
  
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
          Por favor, clique no carde abaixo para redefinir sua senha!
        </Text>
      </View>

      <TouchableOpacity style={styles.cardForgotPassword}>
        <View
          style={{
            position: "relative",
            padding: 24,
            borderColor: "#D5DDE0",
            borderRadius: 14,
            borderWidth: 1,
          }}
        >
          <MaterialIcons name="phone" size={50} style={{ color: "#3e4958" }} />
        </View>
        <View>
          <Text
            style={{
              color: "#3e4958",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Via SMS:
          </Text>
          <Text
            style={{
              color: "#3e4958",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            ** ********91
          </Text>
        </View>
      </TouchableOpacity>
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
  cardForgotPassword: {
    height: 124,
    gap: 16,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "white",
    borderColor: "#D5DDE0",
    
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 50,
    marginLeft: 24,
    marginRight: 24
  }
})
