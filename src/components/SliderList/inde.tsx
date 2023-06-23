import { FlatList, View, StyleSheet, Text, Dimensions } from "react-native"

export function SliderList(){

  
  const data = ["#ff0000", "#000000", "#50a000", "#960aaf", "#FFFf00", "#999999"];

  const { width} = Dimensions.get('window');


  return(
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        snapToOffsets={[ ...Array(data.length)].map((x, i) => i * (width*0.8 - 20) + (i-1)*40)}
        scrollEventThrottle={16}
        decelerationRate="fast"
        horizontal
        renderItem={({item}) => (
          <View 
          style={{
              backgroundColor: item,
              width: width * 0.8,
              height: width / 2.6,
              marginVertical: 12,
              marginHorizontal: 10,
              borderRadius: 8
            }}
            >
              <Text>Olá</Text>

            </View> 
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {

  }
  

})