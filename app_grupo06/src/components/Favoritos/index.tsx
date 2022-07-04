import React, { useState, useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
// import { FavoritosContext } from "../../context/FavoritosContext";

const Favoritar = ({ produto }) => {
  const [favorited, setFavorited] = useState(true);
  // const { adicionarProduto,deletarProduto } = useContext(FavoritosContext)

  const handleAddFavorito = () => {
    setFavorited(!favorited);
    // favorited? adicionarProduto(
    //   produto.sku,
    //   produto.nomeProduto,
    //   produto.descricaoProduto,
    //   produto.precoProduto,
    //   produto.imagemProduto)
    //   :deletarProduto(produto)
  }


  return (
    <TouchableOpacity style={styles.container} onPress={handleAddFavorito}>
      {favorited ?
        <Icon name="heart" color="#eee" type="font-awesome" size={30} onPress={() => handleAddFavorito()} />
        :
        <Icon name="heart" color="#fe5430" type="font-awesome" size={30} onPress={() => handleAddFavorito()} />
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