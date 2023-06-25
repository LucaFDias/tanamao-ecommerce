import { 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  View 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type BtnTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: BtnTypeStyleProps;
};

export function BtnCredential({ icon, type,...rest }: Props) {

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.Container,
          {
            backgroundColor: type === "PRIMARY" ? "#3b5998" : "#db4a39"
          },
        ]}
        {...rest}
      >
        <MaterialIcons name={icon} size={40} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 64,
    width: 144,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  }
});