import { 
  View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import { InputSearch } from '../../components/Input/index';
import { MaterialIcons} from '@expo/vector-icons'
import { SliderList } from '../../components/SliderList/index';
import { ListCategories } from '../../components/ListCategories';

export function Home() {
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        style={styles.ImageContainer}
        source={require("../../assets/note.jpg")}
      >
        <View style={styles.HeaderContainer}>
          <Image style={styles.LogoImg} source={require("../../assets/logo.png")} />
          <InputSearch icon="search" title="Procurar produtos" />
          <TouchableOpacity>
            <MaterialIcons name="tune" size={34} />
          </TouchableOpacity>
        </View>
        <View style={{top: 120, padding: 24}}>
          <Text>Loja TáNaMão</Text>
          <Text>FASHIO</Text>
          <Text>FASHIO</Text>
          <Text>FASHIO</Text>
        </View>
      </ImageBackground>
      <SliderList />
      <ListCategories />
      <SliderList />
      <SliderList />
      <SliderList />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LogoImg: {
    height: 44,
    width: 44,
    marginRight: 12
  },
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    height: 100,
    backgroundColor: "#fff",
  },
  ImageContainer: {
    height: 350,
    resizeMode: "cover",
    position: "relative",
  },
})