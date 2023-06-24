import { 
  Button, Text, TouchableOpacity, StyleSheet, View
} from "react-native";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export type BtnIconTypeStylesProps = 'PRIMARY' |'SECONDARY'

type Props = TouchableOpacityProps & {
  title: string;
  type?: BtnIconTypeStylesProps;
};

export function BtnLayout({title, ...rest}: Props) {

  return (
    <TouchableOpacity style={styles.Container} {...rest}>
      <Text style={styles.BtnTitle}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 54,
    borderRadius: 14,
    backgroundColor: "#1152FD",
    justifyContent: "center",
    alignItems: "center",
  },
  BtnTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",

  },
})