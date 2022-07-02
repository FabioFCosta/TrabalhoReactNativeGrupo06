import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FavoritoContext } from "../../context/FavoritosContext";

const Favoritar = ({ produto }) => {
  const { adicionarFavorito } = useContext(FavoritoContext);

  const handleAddFavorito = () => {
    adicionarFavorito(produto.sku, produto.nomeProduto, produto.descricaoProduto, produto.precoProduto, produto.imagemProduto)
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="heart" color="#fe5430" type="font-awesome" size={30} onPress={() => handleAddFavorito()}  />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    position:'absolute',
    alignSelf:'flex-end'
  },

});
export default Favoritar;