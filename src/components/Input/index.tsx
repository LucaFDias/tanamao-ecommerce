import { MaterialIcons } from '@expo/vector-icons';
import { 
  TextInput,
  View, 
  StyleSheet, 
  TouchableOpacity 
} from "react-native";

export type BtnTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
  type?: BtnTypeStyleProps
};

export function InputSearch({title, icon}: Props) {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <MaterialIcons 
          name={icon}
          size={30} 
          color="#E0E0E0" 
          />
      </TouchableOpacity>
      <TextInput
        keyboardType="default"
        style={styles.Input}
        placeholder={title} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,

    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "#F7F8F9",
    borderColor: "#D5dde0",

    minHeight: 40,
    maxHeight: 40,
    alignItems: "center",
    flexDirection: "row",
    width: '100%',
  },
  Input: {
    width: "80%",
    fontSize: 16,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});