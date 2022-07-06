import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FavoritosContext } from "../../context/FavoritosContext";

const Favoritar = ({ produto }) => {
  const { adicionarFavorito,listarFavoritoId } = useContext(FavoritosContext)
  const [favorited, setFavorited] = useState(listarFavoritoId(produto.idProduto));

  const handleAddFavorito = () => {
    setFavorited(!favorited);
    adicionarFavorito(produto);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleAddFavorito}>
      {favorited ?
        <Icon name="heart" color="#fe5430" type="font-awesome" size={30} onPress={() => handleAddFavorito()} />
        :
        <Icon name="heart" color="#eee" type="font-awesome" size={30} onPress={() => handleAddFavorito()} />
      }
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },

});
export default Favoritar;