import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CardFavorito from "../../components/Favoritos/CardFavoritos";
import { FavoritosContext } from "../../context/FavoritosContext";

const Favoritos = ({ navigation }) => {
  const { listarFavoritos } = useContext(FavoritosContext);

  return (
    <View style={styles.container}>
      <FlatList
      contentContainerStyle={styles.flatList}
        numColumns={2}
        data={listarFavoritos()}
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
  }
});

export default Favoritos;