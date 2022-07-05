import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CardFavorito from "../../components/Favoritos/CardFavoritos";
import { FavoritosContext } from "../../context/FavoritosContext";

const Favoritos = ({ navigation }) => {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <View style={styles.container}>
      {favoritos.length>=1?
      <FlatList
      contentContainerStyle={styles.flatList}
      numColumns={2}
      data={favoritos}
      keyExtractor={item => item.id_produto}
      renderItem={response =>
        <>
            <CardFavorito
              produto={response.item}
              navigation={navigation}
              />
          </>
        }
        />
      :
      <Text style={styles.text}>Opss... Seus jogos favoritos devem ter fugido! </Text>}
        </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,    
    backgroundColor: '#070D2D',
    paddingHorizontal: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  flatList:{
    paddingTop:15,
  },
  text:{
    color:'#C4DFE8',
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
  },
});

export default Favoritos;