import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function ListCategories() {
  
  const data = ['Notebooks', 'Computadores', 'Monitores', 'Celulares']
  
  
  return (
    <View style={styles.Container}>
      <Text>Categorias</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.BtnContainer}>
            <TouchableOpacity style={styles.Btn}>
              <Text>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  Container: {
    height: 100,
    backgroundColor: "white",
    gap: 24,
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 12,
  },
  Btn: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
})