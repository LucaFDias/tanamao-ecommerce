import { View, StyleSheet, Text, SafeAreaView } from "react-native"

export function Category() {
  return (
    <SafeAreaView>
      <Text>Category</Text>
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
