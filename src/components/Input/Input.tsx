import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  title: string;
}

export function InputSearch({title}: Props) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <MaterialIcons 
          name='search'
          size={30} 
          color="#E0E0E0" 
          />
      </TouchableOpacity>
      <TextInput placeholder={title} />
    </View>
  )
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    marginRight: 12,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#F5FCFF',
    borderColor: '#E0E0E0',

    minHeight: 48,
    maxHeight: 48,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  }
})