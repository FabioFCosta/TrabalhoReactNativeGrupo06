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
        <Icon name="heart" color="#fe5430" type="font-awesome" size={25} onPress={() => handleAddFavorito()} />
        :
        <Icon name="heart" color="#fe5430" type="feather" size={25} onPress={() => handleAddFavorito()} />
      }
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    backgroundColor: '#C4DFE8',
    borderRadius: 50,
  },

});
export default Favoritar;