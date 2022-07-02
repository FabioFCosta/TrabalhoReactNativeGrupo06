import React, { useContext } from "react";
import { FavoritoContext } from "../../context/FavoritosContext";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CardFavoritos from "../../components/Produtos/CardFavoritos";

const Favoritos = ({navigation}) => {
  const { listarFavoritos } = useContext(FavoritoContext);
  console.log("Listar produtos nos favoritos: "+listarFavoritos)


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Favoritos
      </Text>
      <FlatList
        data={listarFavoritos()}
        keyExtractor={item => item.id_produto}
        renderItem={response =>
          <>
            <CardFavoritos
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
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  text:{
    color:'#000',
  },
  });

export default Favoritos;