import { View, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export function Cart() {
  return (
    <SafeAreaView>
      <Text>Cart</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
})
