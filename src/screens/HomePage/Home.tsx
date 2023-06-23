import { 
  View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { InputSearch } from '../../components/Input/Input';
import { MaterialIcons} from '@expo/vector-icons'
import { SliderList } from '../../components/SliderList/inde';

export function Home() {


  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <InputSearch title="Procurar produtos" />

        {/* ICONS HEADER */}
        <View style={styles.IconsContainer}>
          <TouchableOpacity style={styles.BtnContainer}>
            <MaterialIcons name="shopping-bag" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnContainer}>
            <MaterialIcons name="account-circle" size={40} />
          </TouchableOpacity>
        </View>
      </View>
      <SliderList/>
      <View>
        <Text>Loja TáNaMão</Text>
        <Text>FASHIO</Text>
        <Text>FASHIO</Text>
        <Text>FASHIO</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    padding: 12,
  },
  IconsContainer: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 12,
  },
  BtnContainer: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
})