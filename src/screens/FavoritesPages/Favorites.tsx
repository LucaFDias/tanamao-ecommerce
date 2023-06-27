import React from "react"
import { View, StyleSheet, Text, SafeAreaView } from "react-native"

export function Favorites() {
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
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
