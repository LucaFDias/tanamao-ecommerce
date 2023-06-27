import { 
  View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import { Feather } from "@expo/vector-icons"
import { InputSearch } from '../../components/Input/index';
import { SliderList } from '../../components/SliderList/index';
import { ListCategories } from '../../components/ListCategories';

export function Home() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.HeaderContainer}>
          <InputSearch icon="search" title="Procurar produtos"/>
          <TouchableOpacity>
              <Feather name="bell" color="#999999" size={24} />
          </TouchableOpacity>
        </View>
        <SliderList />
        <ListCategories />
      </ScrollView>
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
    paddingHorizontal: 24,
    height: 50,
    backgroundColor: "#fff",
    gap: 16
  },
  ImageContainer: {
    height: 350,
    resizeMode: "cover",
    position: "relative",
  },
});